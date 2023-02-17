<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('/css/tabler.min.css') }}">
    <title>{{ __('sms.payment') }}</title>
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                @if (session()->has('error'))
                    <div class="alert alert-danger">
                        {{ session()->get('error') }}
                    </div>
                @endif
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <div class="card-title">
                            <h2>
                                {{ __('sms.fee_details') }}
                            </h2>
                        </div>
                        <a href="{{ url()->previous() }}" class="btn btn-primary">{{ __('sms.back') }}</a>
                    </div>
                    <div class="card-body">
                        <h1>demo user</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            @php
                $paystack_active = env('PAYSTACK_PUBLIC_KEY') && env('PAYSTACK_SECRET_KEY') && env('PAYSTACK_PAYMENT_URL');
            @endphp
           
            {{-- Paystack Payment --}}
            @if ($paystack_active)
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">{{ __('sms.paystack') }}</div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">{{ __('sms.paystack_description') }}</p>
                            <button onclick="pay('paystack')" class="btn btn-primary">Pay Now</button>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>

    {{-- paystack_btn Form --}}
    <form action="{{ route('paystack.subscribe') }}" method="POST" class="d-none" id="paystack-form">
        @csrf
        <input type="hidden" name="amount" value="5000">
    </form>


    <script src="{{ asset('/js/bootstrap.bundle.min.js') }}"></script>
    <script>
        function pay(method) {
            // switch (method) {
            //     case 'paypal':
            //         document.getElementById("paypal-form").submit();
            //         break;
            //     case 'stripe':
            //         document.querySelector('.stripe-button-el').click();
            //         break;
            //     case 'razorpay':
            //         document.querySelector(".razorpay-payment-button").click();
            //         break;
            //     case 'paystack':
                    document.getElementById("paystack-form").submit();
                   // break;
           // }
        }
    </script>
</body>

</html>
