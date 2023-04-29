@extends("layouts.super")


@section("title", "ADD SCHOOL")
@section("main")
<div class="container">


    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-between">
                <a class="btn btn-sm btn-info mb-4 " href="{{route('admin.dashboard.action')}}">All School</a>
                <a class="btn btn-sm btn-danger mb-4 " href="{{route('admin.dashboard.AddSchool')}}">Logout</a>
            </div>
            <div class="card" style="height: fit-content; padding-bottom : 30px">
                <div class="card-body text-center">
                    <h5 class="card-title m-b-0">Add School</h5>
                </div>
                <form action="{{route('admin.dashboard.AddSchoolPost')}}" method="POST" class="container m-0">
                    @csrf
                    <div class="row">
                        <div class="col-md-6 my-2">
                            <label for="">School Name</label>
                            <input type="text" name="name" id="name-input" class="form-control">
                            <div class="invalid-feedback" style="display: none" id="name-feedback"></div>
                        </div>

                        <div class="col-md-6 my-2">
                            <label for="">Short Name</label>
                            <input type="text" name="short_name" id="short_name-input" class="form-control">
                            <div>
                                <small class="text-muted">Short name will be used for the school domain</small>
                            </div>
                            <div class="invalid-feedback" style="display: none" id="short_name-feedback"></div>
                        </div>

                        <div class="col-md-6 my-2">
                            <label for="">Admin Email</label>
                            <input type="email" name="email" id="email-input" class="form-control">
                            <div class="invalid-feedback" style="display: none" id="email-feedback"></div>

                        </div>

                        <div class="col-md-6 my-2">
                            <label for="">Telephone</label>
                            <input type="text" name="phone" id="phone-input" class="form-control">
                            <div class="invalid-feedback" style="display: none" id="phone-feedback"></div>
                        </div>

                        <div class="col-md-12 my-2">
                            <label for="">Address</label>
                            <textarea name="address" id="address-input" cols="30" rows="3" class="form-control"></textarea>
                            <div class="invalid-feedback" style="display: none" id="address-feedback"></div>
                        </div>

                        <div class="col-md-12 my-2">
                            <label class="input-label" for="password">Password</label>
                            <input name="password" type="password" class="form-control @error('password')  is-invalid @enderror" id="password-input" aria-describedby="passwordHelp">
                            <div style="height: 10px;"></div>
                            <small>
                                <label for="showPassword"><input onchange="togglePassword()" type="checkbox" name="showPasswod" id="showPassword"> &nbsp; Show Password</label>
                            </small>
                            <div class="invalid-feedback" style="display: none" id="password-feedback"></div>

                        </div>
                        <div class="col-md-12">
                            <button id="submit_form" name="submit_button" type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>


<script>
    function togglePassword() {
        const passwordInput = document.querySelector("#password-input")
        if (passwordInput.type == "password") {
            passwordInput.type = "text"
            return false;
        }
        passwordInput.type = "password"
    }


    $("#submit_form").on("click", function(e) {
        e.preventDefault();
        $("#submit_form").prop("disabled", true).text("please wait...")
        $(".invalid-feedback").hide();
        $("input").removeClass("is-invalid");
        $("text-area").removeClass("is-invalid");
        if (confirm("Are you sure you want to create this school?")) {
            var form = $(this).closest("form");
            var data = $(this).closest("form").serialize()
            $.post(form.attr("action"), data, function(d) {
                if (d.code == 200) {
                    alert("New school created");
                    window.location.assign("{{route('admin.dashboard.action')}}")
                } else {
                    var errors = d.errors;
                    Object.keys(errors).forEach((key) => {
                        const error = errors[key];
                        let element = form.find(`#${key}-input`);
                        let elementFeedback = form.find(`#${key}-feedback`);
                        elementFeedback.show()
                        elementFeedback.text(error[0]);
                        element.addClass('is-invalid');
                    });
                }
            }).fail((err) => {
                if (err.status === 422) {

                    const errors = err.responseJSON.errors

                    Object.keys(errors).forEach((key) => {
                        const error = errors[key];
                        let element = form.find(`#${key}-input`);
                        let elementFeedback = form.find(`#${key}-feedback`);
                        elementFeedback.show()
                        elementFeedback.text(error);
                        element.addClass('is-invalid');
                    });
                } else {
                    alert("something went wrong");
                    $("#submit_form").prop("disabled", false).text("Submit")
                }
            }).always(() => {
                $("#submit_form").prop("disabled", false).text("Submit")

            })
        }
    })
</script>
@endSection