<?php

namespace App\Http\Middleware;

use Auth;
use Closure;

class Role
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
//        dd('jjj');
        if (Auth::check() && Auth::user()->isRole() == '1') {
//            dd('456');
            return $next($request);
        }
        redirect('/home');
    }
}
