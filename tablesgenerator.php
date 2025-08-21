<?php
$PageDirection = 'rtl';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="assets/plugins/fontawesome-free/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./designer/global-recored-style.css" />
    <link rel="stylesheet" href="./designer/combined.404.css" />
    <link href="./designer/btn_group_style.css" rel="stylesheet">
    <link href="assets/<?= $PageDirection ?>/dist/css/adminlte.min.css" rel="stylesheet">
    <link href="./bootstrap5/css/bootstrap.<?= $PageDirection ?>.min.css" rel="stylesheet">
    <link href="./assets/css/style.css" rel="stylesheet">

    <style type="text/css">
        .context-menu li,
        .tooltip {
            text-align: start;
        }

        .context-menu {
            font-family: droid-arabic;
            font-style: normal;
            font-size: 12px;
        }

        .rounded-6 {
            border-radius: 1rem !important;
        }

        #tablearea,
        .dropdown-submenu,
        #tablearea input,
        #theme_dialog * {
            font-family: droid-arabic ! important;
            font-style: normal ! important;
        }

        #theme_dialog *:not(h2) {
            font-size: 12px;
        }

        .dropdown-submenu a {
            text-align: start;
            font-size: small;
        }

        #tablearea .card-body {
            padding-left: 5px;
            padding-right: 5px;
            padding-top: 0px;
        }

        #tblgnratorContainer .icons-table .fas {
            font-size: 40px;
            line-height: 48px;
        }

        #tblgnratorContainer .dropdown-menu {

            min-width: fit-content;
        }



        #edited_table_container td[inputcell="1"]:not(.selected):not(.aux-cell) {
            background: aliceblue;
        }

        .nav-link {
            font-size: 0.8rem;
        }
    </style>
</head>

<body dir="<?= $PageDirection ?>">

    <div id="tablearea" class="container-fluid mt-2">
        <div id="contentAria" class="card card-primary">
            <div class="card-header text-center">إنشاء السجلات الديناميكية</div>
            <div class="card-body" id="table_container">


                <div id="tblgnratorContainer">
                    <div id="menu-toolbar-wrapper">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <!-- File item -->
                                    <a class="nav-link dropdown-toggle" id="file_item" role="button" data-bs-toggle="dropdown" href="#">ملف
                                    </a>
                                    <ul id="menu3" class="dropdown-menu" aria-labelledby="file_item" data-bs-popper="none">
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" data-bs-toggle="modal" data-bs-target="#new_table_dialog" id="new_table_item">جدول جديد...</a>
                                        </li>
                                        <li role="presentation" class="divider"></li>
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="import_pasted_item" data-bs-toggle="modal" data-bs-target="#import_pasted_dialog">لصق بيانات جدول...</a></li>
                                    </ul>
                                </li><!-- File item -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="column-dropdown" role="button" data-bs-toggle="dropdown" href="#">تعديل</a>
                                    <ul class="dropdown-menu" role="menu" aria-labelledby="column-dropdown">
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="edit_undo"><i class="fas fa-undo-alt"></i> تراجع
                                                (Ctrl+Z)</a>
                                        </li>
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="edit_redo"><i class="fas fa-redo-alt"></i> إعادة
                                                (Ctrl+Y)</a>
                                        </li>
                                        <li role="presentation" class="divider"></li>
                                        <li role="presentation">
                                            <a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="edit_autosave">
                                                <i class="fas fa-minus-square"></i> الحفظ التلقائي لتصميم الجدول
                                                محلياً</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="menu_table" role="button" data-bs-toggle="dropdown" href="#">جدول</a>
                                    <ul id="menu1" class="dropdown-menu" role="menu" aria-labelledby="drop_table">
                                        <li role="presentation" class="dropdown-submenu">
                                            <a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="table_resize"><i class="fas fa-expand-alt"></i>تعيين الحجم</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <div class="table_size_chooser">
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li role="presentation">
                                            <a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="table_reset">
                                                <i class="fas fa-circle-notch"></i> إعادة الجدول للبداية
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="table_clear_formatting">
                                                <i class="fas fa-minus-square"></i> إلغاء التنسيقات</a>
                                        </li>
                                        <li role="presentation" class="divider"></li>
                                        <li role="presentation">
                                            <a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="table_transpose">
                                                <i class="fas fa-redo-alt"></i> تدوير الجدول</a>
                                        </li>
                                        <li role="presentation" class="divider"></li>
                                        <li role="presentation" class="dropdown-submenu">
                                            <a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="table_resize">المسافة بين
                                                الخلايا</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <div id="cell-spacing-panel">
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="column-dropdown" role="button" data-bs-toggle="dropdown" href="#">عمود</a>
                                    <ul id="menu1" class="dropdown-menu" role="menu" aria-labelledby="column-dropdown">
                                        <li class="dropdown-submenu">
                                            <a href="#" tabindex="-1">محاذاة النص</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#" tabindex="-1" class="dropdown-item" id="col_align_left">
                                                        <i class="fas fa-align-left"></i> يسار</a></li>
                                                <li><a href="#" class="dropdown-item" tabindex="-1" id="col_align_center">
                                                        <i class="fas fa-align-center"></i> وسط</a>
                                                </li>
                                                <li><a href="#" class="dropdown-item" tabindex="-1" id="col_align_right">
                                                        <i class="fas fa-align-right"></i> يمين</a></li>
                                            </ul>
                                        </li>
                                        <li role="presentation" class="divider"></li>
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="col_insert_left"><i class="fas fa-arrow-left"></i>
                                                إدراج الى اليسار</a></li>
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="col_insert_right"><i class="fas fa-arrow-right"></i>
                                                إدراج الى اليمين</a></li>
                                        <li role="presentation" class="divider"></li>
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="col_remove"><i class="fas fa-trash-alt"></i> حذف</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="row-dropdown" role="button" data-bs-toggle="dropdown" href="#">صف</a>
                                    <ul id="menu2" class="dropdown-menu" role="menu" aria-labelledby="row-dropdown">
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="row_insert_above"><i class="fas fa-arrow-up"></i>
                                                إدراج اعلاة</a></li>
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="row_insert_below"><i class="fas fa-arrow-down"></i>
                                                إدراج إدناة</a></li>
                                        <li role="presentation" class="divider"></li>
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="row_remove"><i class="fas fa-trash-alt"></i> حذف</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="drop5" role="button" data-bs-toggle="dropdown" href="#">خلية</a>
                                    <ul id="menu3" class="dropdown-menu" role="menu" aria-labelledby="drop5">
                                        <li class="dropdown-submenu">
                                            <a href="#" tabindex="-1">محاذاة رأسية</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#" role="button" class="dropdown-item" tabindex="-1" id="vertical_align_top_btn">
                                                        الأعلى</a></li>
                                                <li><a href="#" tabindex="-1" class="dropdown-item" id="vertical_align_middle_btn">
                                                        الوسط</a></li>
                                                <li><a href="#" class="dropdown-item" tabindex="-1" id="vertical_align_bottom_btn">
                                                        الأسفل</a></li>
                                            </ul>
                                        </li>
                                        <li role="presentation" class="divider"></li>
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="cell_merge">دمج الخلية</a></li>
                                        <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="cell_split">تقسيم الخلية</a></li>
                                    </ul>
                                </li>
                                <li role="presentation"><a class="dropdown-item" role="menuitem" tabindex="-1" href="#" id="show_help_item" data-bs-toggle="modal" data-bs-target="#quick_help_dialog">مساعدة سريعة</a></li>
                            </ul>
                        </nav>
                        <div class="btn-toolbar">
                            <div class="btn-m-group btn-m-group-sm">
                                <a class="btn btn-m-default" rel="tooltip" title="" id="table_merge_cells_btn" data-container="body" data-original-title="دمج الخلايا المحددة"><i class="toolbar-icon icon-merge-cells"></i></a>
                                <a class="btn btn-m-default" rel="tooltip" title="" id="table_split_cells_btn" data-container="body" data-original-title="تقسيم الخلايا المحددة"><i class="toolbar-icon icon-split-cells"></i></a>
                            </div>
                            <div class="btn-m-group btn-m-group-sm">
                                <a class="btn btn-m-default" rel="tooltip" title="تراجع (Ctrl+Z)" id="edit_undo_btn" data-container="body" data-original-title="تراجع (Ctrl+Z) "><i class="fas fa-undo-alt"></i></a>
                                <a class="btn btn-m-default" rel="tooltip" title="إعادة خطوة للأمام (Ctrl+Y)" id="edit_redo_btn" data-container="body" data-original-title="إعادة خطوة للأمام (Ctrl+Y) "><i class="fas fa-redo-alt"></i></a>
                            </div>
                            <div class="btn-m-group btn-m-group-sm" id="input_cells_container">
                                <a class="btn btn-m-default" rel="tooltip" title="" id="table_set_input_cells_btn" data-container="body" data-original-title="تحديد الخلايا التي ستكون خلايا المدخلات">تحديد كمدخل</a>
                                <a class="btn btn-m-default" disabled rel="tooltip" title="" id="table_unset_input_cells_btn" data-container="body" data-original-title="إلغاء تحديد الخلايا التي تم تحديدها خلايا المدخلات">إلغاء تحديد كمدخل</a>
                            </div>
                            <div class="btn-m-group btn-m-group-sm">
                                <a class="btn btn-m-default" title="Right align the contents of selected cells" id="right_align_btn"><i class="fas fa-align-right"></i></a>
                                <a class="btn btn-m-default" title="Center the contents of selected cells" id="center_align_btn"><i class="fas fa-align-center"></i></a>
                                <a class="btn btn-m-default" title="Left align the contents of selected cells" id="left_align_btn"><i class="fas fa-align-left"></i></a>
                            </div>
                            <div class="btn-m-group btn-m-group-sm">
                                <a class="btn btn-m-default" title="Change cell font to bold" id="table_bold_font_btn"><i class="fas fa-bold"></i></a>
                                <a class="btn btn-m-default" title="Change cell font to italic" id="table_italic_font_btn"><i class="fas fa-italic"></i></a>
                                <a class="btn btn-m-default" title="Underline text in the selected cells" id="table_underline_btn"><i class="fas fa-underline"></i></a>
                            </div>

                            <div class="btn-m-group btn-m-group-sm">
                                <span class="btn btn-m-default p-0">
                                    <input class="btn-toolbar" type="text" id="fg-color-picker" style="display: none;">
                                </span>
                                <span class="btn btn-m-default p-0">
                                    <input class="btn-toolbar" type="text" id="bg-color-picker" style="display: none;">
                                </span>
                                <span class="btn btn-m-default p-0">
                                    <input class="btn" type="text" id="border-color-picker" style="display: none;">
                                </span>
                                <a class="btn btn-m-default" id="color-clear" rel="tooltip" title="" data-container="body" data-original-title="Clear colors in selected cells">
                                    <i class="toolbar-icon icon-no-colors"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div id="edited_table_container">
                    </div>
                    <div id="Mtable_container">
                    </div>
                    <div id="table_editor_expander" style="display: none;"><span>↧ Expand ↧</span><span>↥ Collapse ↥</span>
                    </div>
                    <div id="theme_dialog" role="dialog" aria-hidden="true">
                        <div id="theme_dialog__close_btn" class="close-btn">إغلاق [X]</div>
                        <h2>حدد ستايل الجدول</h2>
                        <p>
                            من فضلك ، قم بتكوين سمة للجدول الخاص بك عن طريق تحديد سمات <strong>اللون و الحدود</strong> و <strong>المخطط</strong> الموضحة أدناه.
                        </p>
                        <div class="tabs">
                            <ul>
                                <li class="is-active"><a>الالوان</a></li>
                                <li><a>الحدود</a></li>
                                <li><a>المخطط</a></li>
                            </ul>
                        </div>
                        <div id="theme_dialog__panels"></div>
                    </div>


                    <div class="modal fade" id="new_table_dialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content rounded-6 shadow">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">إنشاء جدول جديد</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form class="form-inline">
                                    <div class="modal-body">
                                        <p style="text-align: center;">
                                            إدخل حجم الجدول الجديد. <span style="color: red;">تذكر ان محتويات الجدول الحالي ستفقد</span>
                                        </p>
                                        <div class="form-inline">
                                            <div class="control-group form-group">
                                                <label for="new_table_columns" class="control-label">عدد الأعمدة:</label>
                                                <div class="controls">
                                                    <input type="number" class="form-control" min="1" max="50" id="new_table_columns_input" value="3">
                                                </div>
                                                <span class="help-inline">العدد المسموح: 1-50</span>
                                            </div>
                                            <div class="control-group  form-group">
                                                <label class="control-label" for="new_table_rows_input">عددالصفوف:</label>
                                                <div class="controls">
                                                    <input type="number" min="1" max="500" class="form-control" id="new_table_rows_input" value="1">
                                                </div>
                                                <span class="help-inline">العدد المسموح: 1-500</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input type="submit" id="create_new_table_btn" value="إنشاء" class="btn btn-primary">
                                        <button class="btn btn-default" data-bs-dismiss="modal" aria-hidden="true">إلغاء</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <!-- Import dialog -->
                    <div class="modal fade" id="import_pasted_dialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content rounded-6 shadow">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="myModalLabel">لصق تصميم جدول</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <form action="" method="post" accept-charset="UTF-8" style="margin: 0;" id="import_pasted_form">
                                    <div class="modal-body" style="min-height: 400px; display: flex; flex-direction: column;">
                                        <p>
                                            استخدم الاختصار (Ctrl + V) للصق جدول تم نسخة سابقاً من
                                            <em>(Microsoft Excel او HTM)</em>
                                        </p>
                                        <div id="table_import_paste_target" contenteditable="true"></div>
                                        <label class="checkbox" style="margin: 5px 0 0 0; display: none;width:fit-content"><input type="checkbox" id="import_pasted_with_style">لصق مع التنسيق مثل (الالوان, تنسيق النص, وغيرها.)</label>
                                        <textarea id="import_pasted" name="import_pasted" accept-charset="utf-8" style="display: none;"></textarea>

                                    </div>
                                    <div class="modal-footer">
                                        <input type="submit" value="تحميل" class="btn btn-primary" id="table_import_submit_btn">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <!-- Quick help dialog -->
                    <div class="modal fade" id="quick_help_dialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="quick_help_dialog_label" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content rounded-6 shadow">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="quick_help_dialog_label">Quick help</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>Basic key commands</p>
                                    <ul>
                                        <li><strong>ENTER or double click</strong> — to start editing a cell</li>
                                        <li><strong>ESC</strong> — to stop editing a cell</li>
                                        <li><strong>CTRL+C, CTRL+X, CTRL+V</strong> — to copy, cut
                                            and paste, respectively</li>
                                        <li><strong>TAB or Arrow Keys</strong> — to select a different cell</li>
                                        <li><strong>CTRL+Z</strong> — to undo a change</li>
                                        <li><strong>CTRL+Y</strong> — to redo a change</li>
                                        <li><strong>Left mouse button</strong> — click a cell to
                                            select it (hold left button pressed to select adjacent cells)</li>
                                        <li><strong>Hold CTRL</strong> to select multiple cells (not necessarily adjacent).</li>
                                    </ul>
                                    <p>
                                        Some of the functionalities may not work in all browsers — if you
                                        encounter a problem, please try to use another browser (Google Chrome,
                                        Mozilla Firefox) or update your browser to a newer version if available. If the problem
                                        still persists please .
                                    </p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="column_width_dialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="column_width_dialogLabel" aria-hidden="true">
                        <div class="modal-dialog modal-sm">
                            <div class="modal-content rounded-6 shadow">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="column_width_dialogLabel">تعيين عرض العمود</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form class="form-horizontal">
                                    <div class="modal-body">
                                        <div class="control-group">
                                            <label class="control-label" for="column_width_input">العرض</label>
                                            <div class="form-group">
                                                <input type="number" min="1" max="2560" id="column_width_input" class="form-control d-inline-flex" value="3">
                                                <span class="help-inline">px</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input type="submit" id="set_column_width_btn" value="موافق" class="btn btn-primary">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>




                    <div id="table-aux-col-menu" class="context-menu-wrap">
                        <ul class="context-menu" role="menu">
                            <li data-menu-item-id="add_to_the_left">
                                <a tab-index="-1">إضافة عمود لليسار</a>
                            </li>
                            <li data-menu-item-id="add_to_the_right">
                                <a tab-index="-1">إضافة عمود لليمين</a>
                            </li>
                            <li data-menu-item-id="remove_column">
                                <a tab-index="-1">حذف عمود/اعمدة</a>
                            </li>
                            <li class="divider"></li>
                            <li data-menu-item-id="set_column_width">
                                <a tab-index="-1">تعيين عرض العمود</a>
                            </li>
                        </ul>
                    </div>
                    <div id="table-aux-row-menu" class="context-menu-wrap">
                        <ul class="context-menu" role="menu">
                            <li data-menu-item-id="add_row_above">
                                <a tab-index="-1">إضافة صف فوق</a>
                            </li>
                            <li data-menu-item-id="add_row_below">
                                <a tab-index="-1">إضافة صف تحت</a>
                            </li>
                            <li data-menu-item-id="remove_row">
                                <a tab-index="-1">حذف صف/صفوف</a>
                            </li>
                        </ul>
                    </div>
                    <div id="table-cell-menu" class="context-menu-wrap">
                        <ul class="context-menu" role="menu">
                            <li data-menu-item-id="cell_contents_cut" class="with-zero-clipboard context-menu-item" data-action-id="cell_contents_cut">
                                <a tab-index="-1"><span class="fas fa-cut">&nbsp;</span>قص <span class="context-menu-item__keys">(Ctrl+X)</span></a>
                            </li>
                            <li data-menu-item-id="cell_contents_copy" class="with-zero-clipboard" data-action-id="cell_contents_copy">
                                <a tab-index="-1"><span class="fas fa-copy">&nbsp;</span>نسخ <span class="context-menu-item__keys">(Ctrl+C)</span></a>
                            </li>
                            <li>
                                <a tab-index="-1"><span class="fas fa-paste">&nbsp;</span>لصق (Ctrl+V) </a>
                            </li>
                            <li class="divider"></li>
                            <li class="dropdown-submenu">
                                <a tabindex="-1" href="#">صف</a>
                                <ul class="dropdown-menu">
                                    <li data-menu-item-id="add_row_above">
                                        <a tab-index="-1">إضافة صف فوق</a>
                                    </li>
                                    <li data-menu-item-id="add_row_below">
                                        <a tab-index="-1">إضافة صف تحت</a>
                                    </li>
                                    <li data-menu-item-id="remove_row">
                                        <a tab-index="-1">حذف صف/صفوف</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown-submenu">
                                <a tabindex="-1" href="#">عمود</a>
                                <ul class="dropdown-menu" role="menu">
                                    <li data-menu-item-id="add_to_the_left">
                                        <a tab-index="-1">إضافة عمود لليسار</a>
                                    </li>
                                    <li data-menu-item-id="add_to_the_right">
                                        <a tab-index="-1">إضافة عمود لليمين</a>
                                    </li>
                                    <li data-menu-item-id="remove_column">
                                        <a tab-index="-1">حذف عمود/اعمدة</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="divider"></li>
                            <li class="dropdown-submenu">
                                <a tabindex="-1" href="#">محاذاة النص</a>
                                <ul class="dropdown-menu" role="menu">
                                    <li data-menu-item-id="cell_align_left">
                                        <a tab-index="-1">
                                            <span class="menu-item-icon-align-left">&nbsp;</span>
                                            يسار</a>
                                    </li>
                                    <li data-menu-item-id="cell_align_center">
                                        <a tab-index="-1">
                                            <span class="menu-item-icon-align-center">&nbsp;</span>
                                            وسط</a>
                                    </li>
                                    <li data-menu-item-id="cell_align_right">
                                        <a tab-index="-1">
                                            <span class="menu-item-icon-align-right">&nbsp;</span>
                                            يمين</a>
                                    </li>
                                    <li data-menu-item-id="cell_align_top" style="border-top: 1px lightgray solid;">
                                        <a tab-index="-1" title="Align to the top (vertically)">
                                            <span class="menu-item-icon-align-top">&nbsp;</span>
                                            فوق</a>
                                    </li>
                                    <li data-menu-item-id="cell_align_middle">
                                        <a tab-index="-1" title="Align to the middle (vertically)">
                                            <span class="menu-item-icon-align-middle">&nbsp;</span>
                                            وسط رأسيا</a>
                                    </li>
                                    <li data-menu-item-id="cell_align_bottom">
                                        <a tab-index="-1" title="Align to the bottom (vertically)">
                                            <span class="menu-item-icon-align-bottom">&nbsp;</span>
                                            تحت</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    </div>
    <script src="./assets/plugins/jquery/jquery.min.js"></script>
    <script src="./bootstrap5/js/bootstrap.bundle.min.js"></script>
    <script src="./designer/combined.base.404.js"></script>
    <script>
        $(function() {
            //html_tables(3, 10);
            var jss=`{ "rows_views": [ [ { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#039", "bg_color": "#B9C9FE", "halign": "center", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#039", "bg_color": "#B9C9FE", "halign": "center", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#039", "bg_color": "#B9C9FE", "halign": "center", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#039", "bg_color": "#B9C9FE", "halign": "center", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#039", "bg_color": "#B9C9FE", "halign": "center", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#039", "bg_color": "#B9C9FE", "halign": "center", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } } ], [ { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "left", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "left", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "left", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "left", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "left", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "left", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } } ], [ { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#E8EDFF", "halign": "left", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#E8EDFF", "halign": "left", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#E8EDFF", "halign": "right", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#E8EDFF", "halign": "right", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#E8EDFF", "halign": "right", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#E8EDFF", "halign": "right", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } } ], [ { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "left", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "left", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "right", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "right", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "right", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } }, { "style": { "borders": "", "font_style": { "font-weight": "normal" }, "text_color": "#669", "bg_color": "#D2E4FC", "halign": "right", "valign": "top", "padding": { "top": 10, "right": 10, "bottom": 10, "left": 10 }, "border_color": "#ccc" } } ] ], "model": { "rows": [ [ { "value": "Results", "inputcell": 0, "id": "0_0", "cspan": 6, "rspan": 1, "markup": [ 1, 7 ] }, { "value": "", "inputcell": 0, "id": "0_1", "cspan": -1, "rspan": 1, "markup": [] }, { "value": "", "inputcell": 0, "id": "0_2", "cspan": -2, "rspan": 1, "markup": [] }, { "value": "", "inputcell": 0, "id": "0_3", "cspan": -3, "rspan": 1, "markup": [] }, { "value": "", "inputcell": 0, "id": "0_4", "cspan": -4, "rspan": 1, "markup": [] }, { "value": "", "inputcell": 0, "id": "0_5", "cspan": -5, "rspan": 1, "markup": [] } ], [ { "value": "No", "inputcell": 0, "id": "1_0", "cspan": 1, "rspan": 1, "markup": [ 1, 2 ] }, { "value": "Competition", "inputcell": 0, "id": "1_1", "cspan": 1, "rspan": 1, "markup": [ 1, 11 ] }, { "value": "John", "inputcell": 0, "id": "1_2", "cspan": 1, "rspan": 1, "markup": [ 1, 4 ] }, { "value": "Adam", "inputcell": 0, "id": "1_3", "cspan": 1, "rspan": 1, "markup": [ 1, 4 ] }, { "value": "Robert", "inputcell": 0, "id": "1_4", "cspan": 1, "rspan": 1, "markup": [ 1, 6 ] }, { "value": "Paul", "inputcell": 0, "id": "1_5", "cspan": 1, "rspan": 1, "markup": [ 1, 4 ] } ], [ { "value": "1", "inputcell": 0, "id": "2_0", "cspan": 1, "rspan": 1, "markup": [ 1, 1 ] }, { "value": "Swimming", "inputcell": 0, "id": "2_1", "cspan": 1, "rspan": 1, "markup": [ 1, 8 ] }, { "value": "1:30", "inputcell": 0, "id": "2_2", "cspan": 1, "rspan": 1, "markup": [ 1, 4 ] }, { "value": "2:05", "inputcell": 0, "id": "2_3", "cspan": 1, "rspan": 1, "markup": [ 1, 4 ] }, { "value": "1:15", "inputcell": 0, "id": "2_4", "cspan": 1, "rspan": 1, "markup": [ 1, 4 ] }, { "value": "1:41", "inputcell": 0, "id": "2_5", "cspan": 1, "rspan": 1, "markup": [ 1, 4 ] } ], [ { "value": "2", "inputcell": 0, "id": "3_0", "cspan": 1, "rspan": 1, "markup": [ 1, 1 ] }, { "value": "Running", "inputcell": 0, "id": "3_1", "cspan": 1, "rspan": 1, "markup": [ 1, 7 ] }, { "value": "15:30", "inputcell": 0, "id": "3_2", "cspan": 1, "rspan": 1, "markup": [ 1, 5 ] }, { "value": "14:10", "inputcell": 0, "id": "3_3", "cspan": 1, "rspan": 1, "markup": [ 1, 5 ] }, { "value": "15:45", "inputcell": 0, "id": "3_4", "cspan": 1, "rspan": 1, "markup": [ 1, 5 ] }, { "value": "16:00", "inputcell": 0, "id": "3_5", "cspan": 1, "rspan": 1, "markup": [ 1, 5 ] } ] ] }, "theme": { "ColorTheme": "Light", "BorderTheme": "All borders" }, "fixed_layout": false, "markup": { "instances": [ {}, { "style": { "fontWeight": "", "fontStyle": "", "textDecoration": "", "color": "", "backgroundColor": "" } } ] }, "options": {} }`;
            html_tables_ui(jss, '');
        });
    </script>
</body>

</html>