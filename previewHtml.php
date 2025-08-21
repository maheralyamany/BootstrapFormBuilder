<?php


$PageDirection = 'rtl';
?>
<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/plugins/fontawesome-free/css/all.min.css" rel="stylesheet">
    <link href="./assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet">
    <link href="./assets/plugins/clockpicker/bootstrap-clockpicker.min.css" rel="stylesheet">
    <link href="assets/<?= $PageDirection ?>/dist/css/adminlte.min.css" rel="stylesheet">
    <link href="./bootstrap5/css/bootstrap.<?= $PageDirection ?>.min.css" rel="stylesheet">
    <link href="./assets/css/style.css" rel="stylesheet">
    <link href="./designer/style.css" rel="stylesheet">
  
</head>

<body class="p-4" dir="<?= $PageDirection ?>">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card card-primary">
                    <div class="card-header">
                        <p class="card-title p-1"></p>
                    </div>
                    <div class="card-body p-1">
                        <form id="toolsContainer"></form>
                    </div>
                </div>
            </div>
        </div>
    </div>


</body>
<script src="./assets/plugins/jquery/jquery.min.js"></script>

<script src="./designer/popper.min.js"></script>
<script src="./designer/moment-with-locales.min.js"></script>
<script src="./assets/plugins/clockpicker/bootstrap-clockpicker.min.js"></script>
<script src="./assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
<script src="./bootstrap5/js/bootstrap.bundle.min.js"></script>
<script src="./designer/TouchNumberSpin.js"></script>
<script src="./designer/FileUploader.js"></script>
<script src="./designer/ToolsBuilder.js"></script>
<script>
    $(function() {
        var FormJson =FieldsStorage().get();
        console.info(FormJson);
        getJsonArrayHtml($('#toolsContainer'), FormJson);
    });
</script>
</html>