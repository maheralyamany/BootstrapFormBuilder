<?php

if (isset($_POST['FormJson'])) {
    $FormJson = $_POST['FormJson'];
    $Formata = $_POST['FormData'];
    $FormFileName = str_replace(" ", "_", $Formata['FormName']);
    if (!$FormFileName || empty($FormFileName)) {
        echo json_encode(['status' => 0, 'msg' => 'الرجاء إدخال اسم الإستمارة']);
        die();
    }
    if (!SaveRecoredDesign($FormFileName,  $FormJson)) {
        echo json_encode(['status' => 0, 'msg' => 'خطأ اثناء حفظ تصميم الإستمارة']);

        die();
    } else
        echo json_encode(['status' => 1, 'msg' => 'تم الحفظ بنجاح']);
}



function SaveRecoredDesign($fileName, $data)
{
    $data =  json_encode($data);
    $res = 1;
    
    $upload_path = "RecoredDesign/" . $fileName . ".txt";
    if (file_exists($upload_path) && is_dir($upload_path)) {
        if (!unlink($upload_path)) {
            $res = 0;
        }
    }
    if ($res === 1) {
        $fh = fopen($upload_path, 'w') or die("can't open file");
        fwrite($fh, $data);
        fclose($fh);
        if (!file_exists($upload_path)) {
            $res = 0;
        }
    }
    return $res;
}
