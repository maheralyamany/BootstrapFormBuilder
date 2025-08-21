<?php

if (isset($_POST['FormName'])) {
    $fileName = $_POST['FormName'];
    if (!$fileName || empty($fileName)) {
        echo json_encode(['FormJson' => '[]', 'msg' => 'الرجاء إدخال اسم الإستمارة']);
        die();
    }
    $formPath = "RecoredDesign/" . $fileName . ".txt";
  
    $data = json_decode(file_get_contents($formPath), true);
    echo json_encode(['FormJson' => $data, 'msg' => '']);
   
}