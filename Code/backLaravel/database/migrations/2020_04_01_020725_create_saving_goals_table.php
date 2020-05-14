<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSavingGoalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('saving_goals', function (Blueprint $table) {
            $table->increments('id');     
            $table->timestamps();
            $table->mediumText('title');
            $table->longText('description');
            $table->float('amount', 8, 2);     
            $table->float('total_amount', 8, 2);     
            $table->integer('categories_id')->nullable();; 
            $table->date('start_date', 0)->nullable();
            $table->date('end_date', 0)->nullable();
            $table->integer('users_id')->nullable();
            $table->text('interval')->nullable();
            $table->text('type')->nullable();
            $table->integer('currencies_id')->nullable();
            $table->char('name',255)->nullable();
            $table->char('email',255)->nullable();
            $table->mediumText('image')->nullable();
            $table->integer('transaction_id')->nullable();
            $table->char('transaction_co',255)->nullable();
            $table->char('transaction_sy',5)->nullable();
            $table->char('transaction_na',255)->nullable();
            // $table->char('transaction_co',3);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('saving_goals');
    }
}
