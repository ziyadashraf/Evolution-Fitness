<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.ico" />

    <link rel="stylesheet" href="{{ asset('css/status.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <title>Receipt</title>
    
</head>
<body>
    <div id="status">
        <div class='container'> 
        <div class="logo-holder">
            <img src="{{ asset('images/BlackLogo.png') }}">
        </div>
        <div id="success-know">{{ $success }}</div>
        <div id="pending-know">{{ $pending }}</div>
        <div id="created-at-know">{{ $created_at }}</div>
        <div id="cents-know">{{$amount_cents}}</div>

        <div class="details-holder">
        
        <div class="title">
        <h2>Receipt </h2>
        <p>You may want to screenshot this for later. </p>
        </div>

        <table>
            <tr>
                <th>Order ID</th>
                <th>Price</th>
                <th>Date and Time</th>
                <th>Status</th>
            </tr>
            <tr >
                <td id="order-id">{{$order_id}}</td>
                <td id="amount-cents"></td>
                <td id="created-at"></td>
                <td id="success"></td>
            </tr>
        </table>
            
            
       

        </div>

        <div id="info">
            <!-- <p>You can contact us at: <a href="tel">+201050006974</a></p> -->
            

        </div>

        </div>
        
        <!-- <div>HMAC : {{$hmac}}</div> -->
    </div>
    <script src="{{asset('js/status.js')}}"></script>
</body>
</html>