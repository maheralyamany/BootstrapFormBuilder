<?php

// Credits: 
// http://stackoverflow.com/questions/3004041/how-to-replace-a-particular-line-in-a-text-file-using-php
// http://stackoverflow.com/users/91914/gnarf

// One approach that you can use on smaller files that can fit into your memory twice:

    $data = file('myfile'); // reads an array of lines
    function replace_a_line($data) {
       if (stristr($data, 'certain word')) {
         return "replaement line!\n";
       }
       return $data;
    }
    $data = array_map('replace_a_line',$data);
    file_put_contents('myfile', implode('', $data));

// A quick note, PHP > 5.3.0 supports lambda functions so you can remove the named function declaration and shorten the map to:

    $data = array_map(function($data) {
      return stristr($data,'certain word') ? "replacement line\n" : $data;
    }, $data);

// You could theoretically make this a single (harder to follow) php statement:
    
    file_put_contents('myfile', implode('', 
      array_map(function($data) {
        return stristr($data,'certain word') ? "replacement line\n" : $data;
      }, file('myfile'))
    ));

// Another (less memory intensive) approach that you should use for larger files:

    $reading = fopen('myfile', 'r');
    $writing = fopen('myfile.tmp', 'w');

    $replaced = false;

    while (!feof($reading)) {
      $line = fgets($reading);
      if (stristr($line,'certain word')) {
        $line = "replacement line!\n";
        $replaced = true;
      }
      fputs($writing, $line);
    }
    fclose($reading); fclose($writing);
    // might as well not overwrite the file if we didn't replace anything
    if ($replaced) 
    {
      rename('myfile.tmp', 'myfile');
    } else {
      unlink('myfile.tmp');
    }