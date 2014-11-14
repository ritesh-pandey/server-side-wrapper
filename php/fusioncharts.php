<?php
    function create_chart($base_path) {
        $json = file_get_contents($base_path . './chart.json');
        $fc_constructor = file_get_contents($base_path . './templates/constructor.js');
        if ($json !== FALSE) {
            // echo $json;
            $html = preg_replace('/__option__/', $json, $fc_constructor);
            echo $html;
        } else {
            echo "Cannot read";
        }
    }
?>
