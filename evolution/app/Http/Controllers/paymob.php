<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class paymob extends Controller
{
    // public function subscribe(){
    //     return view('subscribe');
    // }

    public function status(){
        $data = request () ->query ();



        $hmac = $data['hmac'];

        $amount_cents = $data ['amount_cents'];
        $created_at = $data['created_at'];
        $currency = $data[ 'currency'];
        $error_occured = $data[ 'error_occured'];
        $has_parent_transaction = $data[ 'has_parent_transaction'];
        $id = $data[ 'id'];
        $integration_id = $data['integration_id'];
        $is_3d_secure = $data[ 'is_3d_secure'];
        $is_auth = $data[ 'is_auth'];
        $is_capture = $data['is_capture'];
        $is_refunded = $data[ 'is_refunded'];
        $is_standalone_payment = $data['is_standalone_payment'];
        $is_voided = $data['is_voided'];
        $order_id = $data['order'];
        $owner = $data[ 'owner'];
        $pending = $data[ 'pending'];
        $source_data_pan = $data[ 'source_data_pan'];
        $source_data_sub_type = $data[ 'source_data_sub_type'];
        $source_data_type = $data['source_data_type'];
        $success = $data['success'];
        $request_string = $amount_cents.$created_at.$currency.$error_occured.$has_parent_transaction.$id.$integration_id.$is_3d_secure.$is_auth.$is_capture.$is_refunded.$is_standalone_payment.$is_voided.$order_id.$owner.$pending.$source_data_pan.$source_data_sub_type.$source_data_type.$success;
        
        $hashed= hash_hmac('SHA512', $request_string, 'F7BFC117DE982B1CC3BAA81C2A55D77B') ;  
        
        if($hmac == $hashed){

            return view('status', compact(['id', 'order_id', 'success', 'pending', 'hmac', 'amount_cents', 'created_at']));

        }else return 'Sorry, your transaction can not be completed for security reasons.';
    }


    public function PostState(Request $request){
        $therequest = $request;

            $json=json_decode($therequest);
           
            $amount_cents = $json->obj->amount_cents;
            $order_created_at = $json->obj->order->created_at;
            $currency = $json->obj->currency;
            $error_occured = $json->obj->error_occured;
            $has_parent_transaction = $json->obj->has_parent_transaction;
            $transaction_id = $json->obj->id;
            $integration_id = $json->obj->integration_id;
            $is_3d_secure = $json->obj->is_3d_secure;
            $is_auth = $json->obj->is_auth;
            $is_capture = $json->obj->is_capture;
            $is_refunded = $json->obj->is_refunded;
            $is_standalone_payment = $json->obj->is_standalone_payment;
            $is_voided = $json->obj->is_voided; 
            $order_id = $json->obj->order->id;
            $owner = $json->obj->owner;
            $pending = $json->obj->pending;
            $source_data_pan = $json->obj->source_data->pan;
            $source_data_type = $json->obj->source_data->type;
            $source_data_sub_type = $json->obj->source_data->sub_type;
            $success = $json->obj->success;
           
            
            
            
            $request_string = $amount_cents.$order_created_at.$currency.$error_occured.$has_parent_transaction.$transaction_id.$integration_id.$is_3d_secure.$is_auth.$is_capture.$is_refunded.$is_standalone_payment.$is_voided.$order_id.$owner.$pending.$source_data_pan.$source_data_type.$source_data_sub_type.$success;
            $hashed_string = hash_hmac('SHA512', $request_string, 'F7BFC117DE982B1CC3BAA81C2A55D77B');

            $secure_hash = $json->obj->data->secure_hash;
            

            if($secure_hash == $hashed_string){

                $payments = new Payments;
                $payments->amount = $amount_cents;
                $payments->id = $order_id;
                if($integration_id == '3536460' || $integration_id == 3536460){
                    $payments->integration = 'online cards';
                }else {
                    $payments->integration = 'valU';
                }
                $payments->status = $success;

                $payments->save();


            }else return 'error';

         
         

    }

}
