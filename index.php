<?php
$PageDirection = 'rtl';
?>
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="assets/plugins/fontawesome-free/css/all.min.css" rel="stylesheet">
    <link href="assets/<?= $PageDirection ?>/dist/css/adminlte.min.css" rel="stylesheet">
    <link href="./designer/btn_group_style.css" rel="stylesheet">
      <link href="./assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet">
    <link href="./assets/plugins/clockpicker/bootstrap-clockpicker.min.css" rel="stylesheet">
    <link href="./assets/plugins/sweetalert2/sweetalert2.css" rel="stylesheet">
    <link href="./bootstrap5/css/bootstrap.<?= $PageDirection ?>.min.css" rel="stylesheet">
    <link href="./assets/css/style.css" rel="stylesheet">
    <link href="./designer/style.css" rel="stylesheet">
    <link href="./designer/designer_style.css" rel="stylesheet">
</head>

<body class="hold-transition sidebar-mini layout-fixed  sidebar-collapse" dir="<?= $PageDirection ?>">

    <div class="wrapper">
        <nav class="main-header navbar navbar-expand-md navbar-light navbar-primary">
            <div class="navbar-collapse order-1 collapse show" id="navbarCollapse">
                <ul class="order-1 order-md-1 navbar-nav mm-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"> <span class="navbar-toggler-icon"></span></a>
                    </li>
                </ul>
            </div>
        </nav>
        <aside class="main-sidebar elevation-5 sidebar-dark-primary">
            <div class="sidebar">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image border-2   border-gray rounded-circle p-0">
                        <img src="assets/img/user2.png" class="img-circle" alt="User Image">
                    </div>
                    <div class="info">
                        <a href="#" class="d-block text-white">Maher Alyamany</a>
                    </div>
                </div>
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" id="sidebar-nav" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p> Dashboard <i class="left fas "></i> </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item"> <a href="index.php?lang=ar" class="nav-link"> <i class="far fa-circle nav-icon"></i>
                                        <p>Dashboard v1</p>
                                    </a> </li>
                                <li class="nav-item"> <a href="index.php?lang=ar" class="nav-link"> <i class="far fa-circle nav-icon"></i>
                                        <p>Dashboard v2</p>
                                    </a> </li>
                                <li class="nav-item"> <a href="index.php?lang=ar" class="nav-link"> <i class="far fa-circle nav-icon"></i>
                                        <p>Dashboard v3</p>
                                    </a> </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div> <!-- /.sidebar -->
        </aside>
        <main class="content-wrapper p-2">
            <section class="content">
                <div class="container-fluid" id="toolsContainer">
                </div>
            </section>
        </main>
        <footer class="main-footer text-center">  </footer>
    </div>


    <script src="./assets/plugins/jquery/jquery.min.js"></script>
    <script src="./designer/jquery-ui.js"></script>
  
    <script src="./designer/popper.min.js"></script>
     <script src="./designer/moment-with-locales.min.js"></script>
    <script src="./assets/plugins/clockpicker/bootstrap-clockpicker.min.js"></script>
    <script src="./assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
    <script src="./assets/<?= $PageDirection ?>/dist/js/adminlte.min.js"></script>
    <script src="./assets/plugins/sweetalert2/sweetalert2.min.js"></script>
    <script src="./bootstrap5/js/bootstrap.bundle.min.js"></script>
   
   
    <script src="./designer/TouchNumberSpin.js"></script>
    <script src="./designer/FileUploader.js"></script>
    <script src="./designer/ToolsBuilder.js"></script>
    <script src="./designer/ToolsDesigner.js"></script>
    <script>
        $(function() {
            new ToolsDesigner('#toolsContainer');

        });
    </script>

    <!--  <script src="dist/switch.js"></script> -->
</body>

</html>