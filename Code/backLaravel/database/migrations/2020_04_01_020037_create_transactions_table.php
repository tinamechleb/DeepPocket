<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id');     
            $table->timestamps();
            $table->mediumText('title');
            $table->longText('description')->nullable();
            $table->float('amount', 8, 2);     
            $table->text('categories_name'); 
            $table->integer('categories_id'); 
            $table->date('start_date', 0)->nullable();
            $table->date('end_date', 0)->nullable();
            $table->integer('users_id');
            $table->text('interval')->nullable();
            $table->text('type');
            $table->text('recurrence');
            $table->integer('currencies_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
