<?php

class User
{
    public $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getAllUsers()
    {
        $query = 'SELECT * FROM users';

        $stmt = $this->db->query($query);
        $users = $stmt->fetchAll();

        return $users;
    }

    public function getUserById($id)
    {
        $query = 'SELECT * FROM users WHERE id = ?';

        $stmt = $this->db->prepare($query);
        $stmt->execute([$id]);
        $user = $stmt->fetch();
        return $user;
    }

    public function createUser($name, $email, $password)
    {
        $query = 'INSERT INTO users (name, email, password) VALUES ( ? , ?, ? )';

        $stmt = $this->db->prepare($query);
        $result = $stmt->execute([$name, $email, $password]);

        return $result;
    }

    public function updateUserById($id, $name, $email, $password) {
        $query = 'UPDATE users SET name=?, email=?, password=? WHERE id=?';
        $stmt = $this->db->prepare($query);
        $result = $stmt->execute([$name, $email, $password, $id]);

        return $result;
    }

    public function deleteUserById($id)
    {
        $query = 'DELETE FROM users WHERE id = ?';

        $stmt = $db->prepare($query);
        $result = $stmt->execute([$id]);
        return $result;
    }

}