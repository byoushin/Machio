<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function get_location()
    {
        $location_array = [
            ["ばかじゃないのに", 33.59422908922201, 130.40510794483487],
            ["馴れ合いサーブ", 33.59487254169459, 130.40815493440317],
            ["花一匁", 33.59587254169459, 130.40815492440317],
        ];

        $location_array = json_encode($location_array);

        return response($location_array, 200);
    }
}
?>