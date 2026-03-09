<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'string|required|min:2|max:255',
            'last_name' => 'string|required|min:2|max:255',
            'email' => 'email|string|required|max:255|unique:users',
            'password' => 'string|required|min:8|max:255',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth')->plainTextToken;
        return response()->json([
            'user' => $user,
            'token' => $token,
            'message' => 'You Successfully Registred'
        ], 201);
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'string|email|required|max:255',
            'password' => 'string|required|min:8'
        ]);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = User::where('email', $request->email)->firstOrFail();
            $token = $user->createToken('auth')->plainTextToken;
            return response()->json([
                'user' => $user,
                'token' => $token,
                'message' => 'You\'ve being logged in enjoy'
            ], 200);
        }
        return response()->json([
            'message' => 'Invalid login credentials'
        ], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'You have been successfully logged out'
        ], 200);
    }
    public function fetchUser(Request $request){
        return response()->json($request->user(),200);
    }
}
