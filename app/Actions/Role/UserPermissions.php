<?php

namespace App\Actions\Role;

use Spatie\Permission\Models\Role;

class UserPermissions
{
    public static function fetch()
    {
        $authUser = auth()->user();
        $role = $authUser->role;
        $role = Role::where("name", ucwords($role))->where("school_id", school()->id)->first();
        $permissions = $role->permissions()->get(['name', 'id']);

        return $permissions;
    }
}
