@extends("layouts.super")

@section("title", "ALL SCHOOLS")

@section("main")
    <div class="container">


        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between">
                <a class="btn btn-sm btn-info mb-4 " href="{{route('admin.dashboard.AddSchool')}}">Add School</a>
                <a class="btn btn-sm btn-danger mb-4 " href="{{route('admin.dashboard.AddSchool')}}">Logout</a>
                </div>
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title m-b-0">All Schools</h5>
                    </div>
                    <div class="table-responsive"> 
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">S/N</th>
                                    <th scope="col">School Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Domain</th>
                                    <!-- <th></th> -->
                                </tr>
                            </thead>
                            <tbody class="customtable">
                                @foreach($schools as $key => $school)
                                <tr>
                                    <td>{{ $key + 1 }}</td>
                                    <td>{{ $school->name }}</td>
                                    <td>{{ $school->email }}</td>
                                    <td>{{ $school->phone }}</td>
                                    <td>{{ $school->domain }}</td>
                                    <!-- <td>
                                        <a target="_blank" href="{{ route('admin.dashboard.loginAsSchool', $school->id) }}">Login as School</a>
                                    </td> -->
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
    @endSection