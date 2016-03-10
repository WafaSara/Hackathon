<!-- resources/views/auth/login.blade.php -->

<!DOCTYPE html>

<html>
    <head>
        <style>

            *,
            *:before,
            *:after{
                box-sizing:border-box;
                -moz-box-sizing:border-box;
                -webkit-box-sizing:border-box;
            }

            form{
                width:400px;
                margin:0 auto;
            }

            input.text{
                width: 100%;
                background-color:#fff;
                border:#434343 solid 1px;
                height: 40px;
                padding-left: 10px;
                margin-bottom: 20px;
                font-size: 15px;
                color:#434343;
            }

            ::-webkit-input-placeholder {
               color: #434343;
            }

            :-moz-placeholder { /* Firefox 18- */
               color: #434343;
            }

            ::-moz-placeholder {  /* Firefox 19+ */
               color: #434343;
            }

            :-ms-input-placeholder {
               color: #434343;
            }

            input:focus{
                outline: none;
            }

            .remember{
                font-family: "Arial";
                font-size: 12px;
            }

            button.submit{
                background-color: #002267;
                color: #fff;
                float: right;
                border:1px solid transparent;
                width: 120px;
                padding: 5px 0;
                text-align: center;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 14px;
            }

            .logo{
                width:250px;
                margin-bottom:20px;
            }

            .center{
                width:400px;
                margin: 0 auto;
            }

            section{
                padding-top:50px;
            }

        </style>
    </head>
    <body>
        <section>
            <div class="center">
                <img src="/images/logo-vip-rew.jpg" class="logo">
            </div>
            <form method="POST" action="/auth/login">
              {!! csrf_field() !!}
                <div>
                    <input type="email" name="email" value="{{ old('email') }}" class="text" placeholder="Email ou identifiant Rewards">
                </div>
                <div>
                    <input type="password" name="password" id="password" class="text" placeholder="Mot de passe">
                </div>
                <div>
                    <input type="checkbox" name="remember"> <label class="remember">Remember Me</label>
                </div>
                <div>
                    <button type="submit" class="submit">Je valide</button>
                </div>
            </form>
        </section>
    </body>
</html>
