var defaultsOptions = {
    showPreviewHtmlBtn: true,
    showSaveHtmlBtn: true,
    showClearToolsBtn: true,
    PreviewHtmlTitle: '',
};

function isRowOrColType(itemType) {
    return ['row', 'col'].includes(itemType)
}
var UnReDo = function() {
    function a(a) {
        var e = this;
        this.curr_state = null;
        this.undo_list = [];
        this.redo_list = [];
        this.table_view = a;
        this.ignore_next_change = !1;
        this.size_limit = 50;
        var b = null;
        a.on("state_change", function() {
            null != b && window.clearTimeout(b);
            b = setTimeout(function() {
                e.ignore_next_change || e.addChange();
                e.ignore_next_change = !1
            }, 600)
        })
    }
    a.prototype.addChange = function() {
        var a = this.table_view.dump();
        null == this.curr_state ? this.curr_state = a : (this.undo_list.length == this.size_limit && this.undo_list.splice(0, 1), this.undo_list.push(this.curr_state), this.curr_state = a, this.redo_list.splice(0, this.redo_list.length))
    };
    a.prototype.undo = function() {
        0 != this.undo_list.length && (this.redo_list.push(this.curr_state), this.curr_state = this.undo_list.pop(), this.ignore_next_change = !0, this.table_view.load(this.curr_state))
    };
    a.prototype.getcurrState = function() {
        return this.curr_state;
    };
    a.prototype.redo = function() {
        0 != this.redo_list.length && (this.undo_list.push(this.curr_state), this.curr_state = this.redo_list.pop(), this.ignore_next_change = !0, this.table_view.load(this.curr_state))
    };
    a.prototype.clear = function() {
        this.undo_list.length = 0;
        this.redo_list.length = 0;
        this.curr_state = null
    };
    return a
}()

function ToolsDesigner(parentId, options) {
    var ids = 0,
        unIds = 0,
        current = null,
        Fields = {},
        dialog = null,
        dialogModel = null,
        d_body = null,
        sortableId = 'designer',
        settings = {},
        toolSettings = {},
        droppableTools = {},
        container, undoRedo;
    Object.defineProperty(this, 'undoRedo', {
        get: function() {
            return undoRedo;
        },
        set: function(value) {
            undoRedo = value;
        }
    });
    Object.defineProperty(this, 'droppableTools', {
        get: function() {
            return droppableTools;
        },
        set: function(value) {
            droppableTools = value;
        }
    });
    Object.defineProperty(this, 'sortableId', {
        get: function() {
            return sortableId;
        },
        set: function(value) {
            sortableId = value;
        }
    });
    Object.defineProperty(this, 'd_body', {
        get: function() {
            return d_body;
        },
        set: function(value) {
            d_body = value;
        }
    });
    Object.defineProperty(this, 'dialogModel', {
        get: function() {
            return dialogModel;
        },
        set: function(value) {
            dialogModel = value;
        }
    });
    Object.defineProperty(this, 'dialog', {
        get: function() {
            return dialog;
        },
        set: function(value) {
            dialog = value;
        }
    });
    Object.defineProperty(this, 'Fields', {
        get: function() {
            // console.log('Get:', Fields);
            return Fields;
        },
        set: function(value) {
            Fields = value;
            //  console.log('Set:', Fields)
        }
    });
    Object.defineProperty(this, 'current', {
        get: function() {
            return current;
        },
        set: function(value) {
            current = value;
        }
    });
    Object.defineProperty(this, 'settings', {
        get: function() {
            return settings;
        },
        set: function(value) {
            settings = value;
        }
    });
    Object.defineProperty(this, 'toolSettings', {
        get: function() {
            return toolSettings;
        },
        set: function(value) {
            toolSettings = value;
        }
    });
    Object.defineProperty(this, 'ids', {
        get: function() {
            return ids;
        },
        set: function(value) {
            ids = value;
        }
    });
    Object.defineProperty(this, 'unIds', {
        get: function() {
            return unIds;
        },
        set: function(value) {
            unIds = value;
        }
    });
    Object.defineProperty(this, 'container', {
        get: function() {
            return container;
        },
        set: function(value) {
            container = value;
        }
    });
    this.init(parentId, options);
}
ToolsDesigner.prototype.init = function(parentId, options) {
    if (!parentId || parentId.length == 0) {
        console.error('You Must get tools parent id')
        return;
    }
    var storg = FieldsStorage().get();
    $.observable(this);
    this.container = parentId;

    this.initSettings(options);
    this.initDroppableTools();
    this.drawToolsDroppable();
    this.initDraggable();
    this.loadCachedDesign(storg);
    setInterval(() => {
        var result = this.undoRedo.getcurrState()
        if (result && result.filds) {
            var filds = $.extend(true, {}, result.filds)
            FieldsStorage().set(filds);
        }
    }, 10000);
    window.addEventListener("beforeunload", () => {
        var result = this.BuildContentJson();
        FieldsStorage().set(result);
    });
}
ToolsDesigner.prototype.initSettings = function(options) {
    options = (options || {})
    this.settings = $.extend(true, {}, defaultsOptions, options);
};
ToolsDesigner.prototype.initToolsBuilder = function(unique, options, designTime) {
    var handler = null;
    if (designTime) {
        // options['fieldUnique'] = unique;
        handler = () => {
            this.addChangeToCach();
        }
    }
    return new ToolsBuilder(options, designTime, handler);
}
ToolsDesigner.prototype.dump = function() {
    var result = this.BuildContentJson();
    return {
        filds: result
    }
};
ToolsDesigner.prototype.load = function(a) {
    if (a && a.filds) {
        this.loadCachedDesign(a.filds);
    }
};
ToolsDesigner.prototype.addChangeToCach = function() {
    this.trigger("state_change")
};
ToolsDesigner.prototype.loadCachedDesign = function(storage) {
    var $designContainer = $(this.getSortable());
    $(this.getDraggable() + " .widgets").removeClass("widgets-selected");
    $('#toolProprties').empty();
    $designContainer.empty();
    if (storage && storage.length > 0) {
        storage.forEach(el => {
            var $item = this.createDesignerUi($('<div field-type="' + el.type + '"></div>'), el.settings);
            $designContainer.append($item);
            if (el.type === "row") {
                if (obHasProp(el, 'childs') && el.childs.length > 0) {
                    el.childs.forEach(colmn => {
                        var $colHelper = this.createRowColumn($item.find('div.el-row'), colmn.settings);
                        if (obHasProp(colmn, 'childs') && colmn.childs.length > 0) {
                            colmn.childs.forEach(ch => {
                                var $helper = this.createDesignerUi($('<div field-type="' + ch.type + '"></div>'), ch.settings);
                                $colHelper.find('div.col-drag').append($helper);
                                this.addItem($helper);
                                //col-drag
                            });
                        }
                        //col-drag
                    });
                }
            }
            this.addItem($item);
        });
    }
};
ToolsDesigner.prototype.getSortable = function() {
    return '#' + this.sortableId;
};
ToolsDesigner.prototype.getDraggable = function() {
    return '.draggable-drag';
};

ToolsDesigner.prototype.drawToolsDroppable = function() {
    var $row = $('<div class="row"></div>'),
        $msection = $(' <section class="col m-0 card p-1" style="background: rgb(245, 245, 245);"></section>'),
        $hedr = $('<header class="el-header _fc-m-tools"></header>'),
        $btnGrp = $(' <div class="btn-m-group btn-m-group-sm">  <button type="button" class="btn btn-m-default" title="تراجع (Ctrl+Z)" id="edit_undo_btn"><i class="fas fa-undo-alt"></i></button> <button type="button" class="btn btn-m-default" title="إعادة خطوة للأمام (Ctrl+Y)" id="edit_redo_btn"><i class="fas fa-redo-alt"></i></button></div>');
    if (this.settings.showClearToolsBtn) {
        var $btn = $('<button type="button" id="cleanTools" class="btn btn-m-default danger"> <i class="fas fa-trash-alt"></i><span class="pl-1">' + trans('ClearWindow') + ' </span></button>').on("click", (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            this.clearWindow();
        });
        $btnGrp.append($btn);
    }
    if (this.settings.showPreviewHtmlBtn) {

        var dialog = null;

        var btn = $('<button type="button"   class="btn btn-m-default primary"> <i class="far fa-eye"></i><span class="pl-1">' + trans('PreviewHtml') + ' </span></button>').
        on("click", (ev) => {
            ev.preventDefault();
            ev.stopPropagation();


            /*  var storage = this.BuildContentJson(false);
             if (storage && storage.length > 0) {
                 FieldsStorage().set(storage);
                 if (dialog == null || dialog.closed) {
                     dialog = window.open(`previewHtml.php`, "preview", "height=650,width=900");
                 } else {
                     dialog.focus();
                 }
             } */
            this.handlePreviewHtml();
        });
        $btnGrp.append(btn);
    }
    if (this.settings.showSaveHtmlBtn) {
        var $btn = $('<button type="button" id="savehtml" class="btn btn-m-default"> <i class="fas fa-save"></i><span class="pl-1">' + trans('save') + ' </span></button>').on("click", (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            this.saveJson();
        });
        $btnGrp.append($btn);
    }
    $hedr.append($btnGrp);
    $msection.append($hedr);
    $msection.append(`<main class="el-main" id="designerPrnt"> <div class="_fc-m-drag draggable-drag" id="` + this.sortableId + `" dir="ltr"></div> </main>`);
    $row.append($msection);
    $row.append(` <aside class="card card-primary card-outline card-tabs  m-0 pt-1 pl-1 pr-1 pb-0" style="width: 220px;"> <header class="card-header p-0 pt-1 border-bottom-0"> <div class="nav nav-tabs" id="tools_builder_tab" role="tablist">  <button class="nav-link active" id="addFieldTab" data-bs-toggle="tab" data-bs-target="#toolbox" type="button" role="tab" aria-controls="toolbox" aria-selected="true">` + trans('ToolsHeaderText') + `</button> <button class="nav-link" id="toolProprtiesTab" data-bs-toggle="tab" data-bs-target="#toolProprties" type="button" role="tab" aria-controls="toolProprties" aria-selected="true">` + trans('ProprtiesHeaderText') + `</button> </div> </header>  <div class="card-body p-0"> <div class="tab-content mb-0 pb-0" id="fields-tabContent"> <div class="tab-pane fade show active p-1 mb-0" id="toolbox" role="tabpanel" aria-labelledby="addFieldTab"> </div> <div class="tab-pane fade pb-1 mb-1" id="toolProprties" role="tabpanel" aria-labelledby="toolProprtiesTab"> </div> </div> </div> </aside>`)
    var toolP = $row.find('#toolbox');
    var rowH = $('<div class="row m-0"></div>');
    toolP.append(rowH);
    var colCont = 1;
    for (const key in this.droppableTools) {
        if (Object.hasOwnProperty.call(this.droppableTools, key)) {
            var el = this.droppableTools[key];
            //hidden:true
            if (!obHasProp(el, 'hidden')) {
                rowH.append('<div class="fb-w-item col-auto widgets" field-type="' + el.type + '"><div class="fb-w-icon "><i class="fc-icon ' + el.icon + '"></i></div> <span class="fb-w-name">' + el.label + '</span></div>');
                if (colCont == 2) {
                    colCont = 0;
                    rowH = $('<div class="row m-0"></div>');
                    toolP.append(rowH);
                }
                colCont += 1;
            }
        }
    }
    $(this.container).empty().append($row);
    this.initUndoRedo($btnGrp);
};
ToolsDesigner.prototype.initUndoRedo = function(grp) {
    var b = new UnReDo(this);
    this.undoRedo = b;
    b.addChange();
    /*  $( this.container ).keydown(function ( a ) {
         console.info(a);
       a.preventDefault();
       if( a.ctrlKey && 90 == a.keyCode ){
           b.undo();
       }else if(a.ctrlKey && 89 == a.keyCode ){
           b.redo();
       }
     }); */
    /*  $(this.container,document).keydown(function (a) {
         a.ctrlKey && 90 == a.which && "DIV" != a.target.nodeName ? b.undo() : a.ctrlKey && 89 == a.which && "DIV" != a.target.nodeName && b.redo()
     }); */
    $("#edit_undo_btn", grp).click(function() {
        b.undo()
    });
    $("#edit_redo_btn", grp).click(function() {
        b.redo()
    });
    $(document).on('keydown', (ev) => {
        if ((ev.ctrlKey && (90 == ev.which || 89 == ev.which)) && !$('#dialog-form', ev.currentTarget).hasClass('show')) {
           
            if (90 == ev.which) {
                b.undo();
            } else if (89 == ev.which) {
                b.redo();
            }
        }
    })
};
ToolsDesigner.prototype.setSortable = function(item) {
   
    if (item.hasClass('ui-sortable'))
        item.sortable('destroy');
    item.sortable({
        revert: false,
        placeholder: "placeholder"
    }).droppable({
        drop: (event, ui) => {
            var d = $(ui.draggable);
            if (!d.data("initialized")) {
               
                this.addItem(d);
            }
        },
    });
    
};
ToolsDesigner.prototype.setDraggable = function(item, isColumn) {
    
    if (isColumn) {
        item.draggable({
            connectToSortable: this.getDraggable(),
            placeholder: "placeholder",
            addClasses: true,
            revert: false
        });
    } else {
        //".widgets:not([field-type='cover'])"
        item.draggable({
            connectToSortable: this.getDraggable(),
            start:(event) => {
                console.log(event.currentTarget);
            },
            helper: (event) => {
               
                var itmType = this.getFieldTypeAttr(event.currentTarget);
                var $helper = this.createDesignerUi($('<div/>', {
                    'field-type': itmType
                }));
                return $helper;
            },
            placeholder: "placeholder",
            addClasses: true,
            revert: false
        });
    }
};
ToolsDesigner.prototype.initDraggable = function() {
    this.setSortable($(this.getSortable()));
    this.setDraggable($(".widgets"));
};
ToolsDesigner.prototype.createRowColumn = function($row, op = null) {
    var $helper = this.createDesignerUi($('<div field-type="col"></div>'), op);
    var $col = $('<div class="col-6 m-0 p-0 row-column" ></div>');
    $col.append($helper);
    $row.append($col);
    return $helper;
};
ToolsDesigner.prototype.getItemCover = function(itemType) {
    var cover;
    if (itemType == 'row') {
        cover = $('<div class="drag-l"> <div class="drag-btn _fc-drag-btn" style="cursor: move;"><i class="fc-icon icon-move"></i></div> </div> <div class="drag-r"> <span role="button" add="true" title="' + trans('add_new_filed') + '" class="drag-btn"><i class="fc-icon icon-add"></i></span><span role="button" addChild="true" title="' + trans('add_column_title') + '" class="drag-btn"><i class="fc-icon icon-add-child"></i></span> <span role="button" title="' + trans('delete_filed') + '" remove="true" class="drag-btn drag-btn-danger"><i class="fc-icon icon-delete"></i></span> </div> <div class="col p-0"> <div class="el-row row row-m p-0" ></div> </div>');
    } else if (itemType == 'col') {
        cover = $('<div class="drag-l"> <div class="drag-btn _fc-drag-btn" style="cursor: move;"><i class="fc-icon icon-move"></i></div> </div> <div class="drag-r"> <span role="button" title="' + trans('delete_filed') + '" remove="true" class="drag-btn drag-btn-danger"><i class="fc-icon icon-delete"></i></span> </div> <div class="col-12 col-drag drag-box draggable-drag">  </div>');
    } else {
        cover = $('<div class="drag_mask"></div><div class="drag-l"><div class="drag-btn _fc-drag-btn" style="cursor: move;"><i class="fc-icon icon-move"></i></div></div> <div class="drag-r"> <span role="button" add="true" title="' + trans('add_new_filed') + '" class="drag-btn"><i class="fc-icon icon-add"></i></span> <span role="button" copy="true" title="' + trans('copy_filed') + '"  class="drag-btn"><i class="fc-icon icon-copy"></i></span> <span role="button" title="' + trans('delete_filed') + '" remove="true" class="drag-btn drag-btn-danger"><i class="fc-icon icon-delete"></i></span> </div> <div class="row row-m p-0" ><div name="itemCover"></div>  </div>');
    }
    return cover;
};
ToolsDesigner.prototype.getFieldTypeAttr = function(t) {
    return $(t).attr('field-type')
}
ToolsDesigner.prototype.getFields = function(unique) {
    return (unique) ? this.Fields[unique] : this.Fields;
}
ToolsDesigner.prototype.createDesignerUi = function($helper, options = null) {
    //
   
    $helper.removeAttr('class')
    $helper.addClass('drag-tool widgets');
    var itemType = this.getFieldTypeAttr($helper);
    var unique = this.uniqueId(),
        isDraged = (options == null || options.length == 0);
    if (isDraged)
        options = {
            type: itemType,
            attrs: {
                id: this.designId(itemType)
            }
        };
    else {
        if (!obHasProp(options, 'type'))
            options.type = itemType;
        else
            itemType = options.type;
        if (!obHasProp(options.attrs, 'id'))
            options.attrs.id = this.designId(itemType);
    }
    var builder = this.initToolsBuilder(unique, options, true);
    var $cover = this.getItemCover(itemType);
    builder.getContent($cover.find('div[name="itemCover"]'));
    // var opts_final = $.extend(true, {}, this.droppableTools[itemType]);
    this.Fields[unique] = {
        Builder: builder,
        Option: this.droppableTools[itemType],
        Helper: $helper
    };
    $helper.empty().append($cover);
    $helper.attr("dir", $('body').attr('dir'));
    $helper.attr("unique", unique);
    //$cover.find('div[name="itemCover"]').disableSelection();
    this.handleHelperBtnsEvents($helper, itemType, unique);
    $helper.css({
        width: '100%',
        height: 'auto'
    });
    this.initItemProprties(unique);
    if (itemType === 'row' && isDraged)
        this.createRowColumn($cover.find('div.el-row'));
    return $helper;
};
ToolsDesigner.prototype.handleHelperBtnsEvents = function(helper, itemType, unique) {
    helper.find('span[remove="true"]').on({
        click: (e) => {
            if (!this.current || this.current.length == 0)
                return;
            SwalConfirm({
                title: trans('confirm_delete_item')
            }, () => {
                this.addChangeToCach();
                $('#toolProprties').empty();
                var itemType = this.getFieldTypeAttr(this.current);
                if (isRowOrColType(itemType)) {
                    var itms = this.current.find('div[field-type][unique]');
                    if (itms && itms.length > 0) {
                        itms.each((j, col) => {
                            var uniqu = $(col).attr('unique');
                            if (obHasProp(this.Fields, uniqu))
                                delete this.Fields[uniqu];
                        });
                    }
                }
                if (obHasProp(this.Fields, unique))
                    delete this.Fields[unique];
                this.unbindEvents(this.current);
                this.current.remove();
                this.current = null;
            });
        }
    })
    helper.find('span[add="true"]').on({
        click: (e) => {
            if (!this.current || this.current.length == 0)
                return;
            var type = this.getFieldTypeAttr(this.current)
            var $item = this.createDesignerUi($('<div/>', {
                'field-type': type
            }));
            $item.insertAfter(this.current);
            this.addItem($item);
        }
    })
    helper.find('span[copy="true"]').on({
        click: (e) => {
            if (!this.current || this.current.length == 0)
                return;
            var options = $.extend(true, {}, this.Fields[unique].Builder.settings);
            deleteObjVal(options, 'selector')
            deleteObjVal(options.attrs, 'id')
            deleteObjVal(options.attrs, 'data_id')
            deleteObjVal(options.attrs, 'name')
            console.info(options);
            var $item = this.createDesignerUi($('<div/>', {
                'field-type': options.type
            }), options);
            $item.insertAfter(this.current);
            this.addItem($item);
        }
    })
    if (itemType === 'row')
        helper.find('span[addchild="true"]').on({
            click: (e) => {
                if (!this.current || this.current.length == 0)
                    return;
                var $row = this.current.find('div.el-row');
                var $col = this.createRowColumn($row);
                this.addItem($col);
            }
        })
};

ToolsDesigner.prototype.addItem = function(item) {
    if (item.data("initialized"))
        return;
    item.data("initialized", true);
    var itemType = this.getFieldTypeAttr(item);
    
    if (itemType == 'row') {
        $.each(item.find('div[field-type="col"]'), (i, el) => {
            this.addItem($(el));
        })
    }
    if (itemType == 'col') {
        
        this.setSortable(item.find('div.draggable-drag'));
        // if (itemType == 'col')
        this.setDraggable($(".widgets"), true);
    }
    item.on('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.onItemSelected($(ev.delegateTarget));
    });
};
ToolsDesigner.prototype.onItemSelected = function(item) {
    if (this.current) {
        if ($(this.current).attr('unique') === $(item).attr('unique'))
            return;
    }
    $(this.getDraggable() + " .widgets").removeClass("widgets-selected");
    this.current = item;
    this.current.addClass("widgets-selected");
    this.BuildItemProprties()
};
ToolsDesigner.prototype.initItemProprties = function(unique) {
    if (!obHasProp(this.Fields, unique) || !obHasProp(this.Fields[unique], 'Option') || !obHasProp(this.Fields[unique].Option, 'props'))
        return;
    var ItemProprties = new Array();
    this.Fields[unique].Option.props.forEach(element => {
        var opts_final = $.extend(true, {}, element);
        opts_final.attrs.id = this.designId(opts_final.type);
        opts_final.unique = unique;
        if (obHasProp(opts_final, 'path')) {
            if (!obHasProp(opts_final, 'events')) {
                if (!(obHasProp(opts_final, 'eventName') && opts_final.eventName.length))
                    opts_final.eventName = 'change';
                opts_final.events = [{
                    on: opts_final.eventName,
                    handler: (ev) => {
                        this.handleValueChanged(ev, unique);
                    }
                }];
            }
        }
        var builder = this.initToolsBuilder(opts_final.attrs.id, opts_final, false);
        var hasChild = 0;
        if (obHasProp(builder.settings, 'childs')) {
            hasChild = 1;
            builder.settings.childs.forEach((propCh, index) => {
                propCh.attrs.id = this.designId(propCh.type);
                propCh.unique = unique;
                propCh.eventName = 'change';
                propCh.events = [{
                    on: propCh.eventName,
                    handler: (ev) => {
                        this.handleValueChanged(ev, unique);
                    }
                }];
                propCh['fieldParent'] = builder;
                builder.settings.childs[index] = this.initToolsBuilder(propCh.attrs.id, propCh, false);
                //  chProprties.push(  builder.settings.childs[index]);
            });
        }
        ItemProprties.push(builder);
        if (hasChild === 1) {
            builder.settings.childs.forEach(propCh => {
                ItemProprties.push(propCh);
            });
        }
    });
    this.Fields[unique]['ItemProprties'] = ItemProprties;
};
ToolsDesigner.prototype.getMaxOptionValue = function(options) {
    var arrByID = options.filter((op) => {
        return Number.isInteger(Number(op.value));
    });
    if (arrByID.length == 0)
        return '1';
    const mxValue = arrByID.reduce((prev, current) => ((prev.value > current.value)) ? prev : current).value;
    var count = (mxValue) ? (Number(mxValue) + 1).toString() : '1';
    return count;
}
ToolsDesigner.prototype.setItemProprtyContent = function(index, unique) {
    if (!obHasProp(this.Fields[unique], 'ItemProprties'))
        return;
    var builder = this.Fields[unique].ItemProprties[index];
    if (obHasProp(builder.settings, 'path')) {
        var value = this.Fields[unique].Builder.getProprtyValue(builder.settings.path);
        if (builder.settings.type === 'OptionsList') {
            if (value != null && value.length > 0) {
                builder.settings.rows = value;
            } else {
                builder.settings.rows = new Array();
            }
        } else if (value != null) {
            if (builder.settings.type === 'switch' && obHasProp(builder.settings, 'role') && builder.settings.role === 'append') {
                var clssList = value.split(' ');
                value = clssList.includes(builder.settings.attrs.activeValue)
            }
            builder.settings.attrs.value = value;
        }
    }
    var $prnt = $('#toolProprties').find('div[index="' + index + '"]');
    $prnt.empty();
    builder.getContent($prnt);
    if (builder.settings.type === 'OptionsList') {
        if (builder.ItemObjects && builder.ItemObjects.length > 0 && Array.isArray(builder.ItemObjects)) {
            builder.ItemObjects.forEach((row, rowIndex) => {
                for (const key in row) {
                    if (Object.hasOwnProperty.call(row, key)) {
                        var elm = row[key];
                        elm.settings.events = [{
                            on: elm.settings.eventName,
                            handler: (evn) => {
                                this.handleOptionsRowValueChanged(evn, unique, rowIndex, index);
                            }
                        }];
                        elm.getContent();
                    }
                }
            });
        }
        var $tbl = builder.$template.find(builder.settings.selector);
        if (builder.ItemObjects.length == 1) {
            $tbl.find('tbody tr').first().find('span[d-remove="true"]').attr('disabled', true);
        }
        $tbl.find('span[add_row="true"]').on('click', (ee) => {
            this.addChangeToCach();
            var count = this.getMaxOptionValue(this.Fields[unique].Builder.settings.options);
            var op = {
                label: trans('option') + count,
                value: count
            };
            this.Fields[unique].Builder.settings.options.push(op);
            this.Fields[unique].Builder.replaceContent();
            this.setItemProprtyContent(index, unique);
        })
        $('#toolProprties').scrollTop($('#toolProprties').height());
    }

    if (obHasProp(builder.settings, 'fieldParent')) {

        builder.settings.evntHandler(builder);

    }
};
ToolsDesigner.prototype.BuildItemProprties = function() {
    $('#toolProprties').empty();
    var unique = this.current.attr('unique');
    if (!obHasProp(this.Fields[unique], 'ItemProprties')) {
        this.BuildMarginProprty(unique);
        return;
    }
    $('.nav-tabs button[data-bs-target="#toolProprties"]').tab('show');
    var propLength = this.Fields[unique].ItemProprties.length;
    for (let i = 0; i < propLength; i++)
        $('#toolProprties').append('<div index="' + i + '"></div>');
    for (let i = 0; i < propLength; i++)
        this.setItemProprtyContent(i, unique);
    this.BuildMarginProprty(unique);
};
ToolsDesigner.prototype.BuildMarginProprty = function(unique) {

    var $tbl = $(`<div index="q" class="col-12"><div class="mt-1">
    <label for="margin_table">` + trans("margin") + `</label>
    <div class="text-center pl-4 pr-4"><table class="table  table-sm table-bordered margin-table text-center"> <tbody><tr> <td colspan="3" path="top" rowspan="1"></td> </tr> <tr> <td colspan="1" rowspan="1" path="right"></td> <td colspan="1" class="m-center"></td> <td colspan="1" rowspan="1" path="left"></td> </tr> <tr> <td colspan="3" rowspan="1" path="bottom"></td> </tr></tbody> </table></div></div></div>`);
    var value = this.Fields[unique].Builder.getProprtyValue('margin');
    var optionH = '';
    for (let j = 0; j < 7; j++)
        optionH += '<option value="' + j + '">' + j + '</option>';


    $.each($tbl.find('.margin-table td:not(.m-center)'), (i, e) => {
        var path = $(e).attr('path');
        var val = value[path];
        var $inpt = $(`<select path="margin.` + path + `" value="` + val + `" class="form-control control-xs text-center">` + optionH + `</select>`);
        $inpt.find('option[value="' + val + '"]').attr('selected', true);
        $(e).empty().append($inpt)
            //$(e).addClass('form-group form-group-sm')
    })


    $('#toolProprties').append($tbl);
    $('.margin-table select[path]', '#toolProprties').on('change', (e) => {

        var path = $(e.currentTarget).attr('path');
        var val = $(e.currentTarget).find('option:selected').val();

        this.Fields[unique].Builder.setProprtyValue(path, val)
    });
    $('#toolProprties').scrollTop($('#toolProprties').height());
};

ToolsDesigner.prototype.handleOptionsRowValueChanged = function(e, unique, rowIndex, propIndex) {
    var builder = e.builder,
        path = builder.settings.path;
    if (path !== 'remove') {
        var val = builder._inputValue();
        this.Fields[unique].Builder.settings.options[rowIndex][path] = val.Value;
        this.Fields[unique].Builder.replaceContent();
        this.setItemProprtyContent(propIndex, unique);
    } else {
        if (e.target.attr('disabled'))
            return;
        SwalConfirm({
            title: trans('confirm_delete_item')
        }, () => {
            this.Fields[unique].Builder.settings.options.splice(rowIndex, 1);
            this.Fields[unique].Builder.replaceContent();
            this.setItemProprtyContent(propIndex, unique);
        });
    }
    return;
}
ToolsDesigner.prototype.handleValueChanged = function(e, unique) {
    //isUnique role:'append'
    var builder = e.builder,
        path = builder.settings.path,
        pBuilder = this.Fields[unique].Builder;
    var val = builder._inputValue();
    if (path === 'attrs.data_id') {
        if (!val.Value || val.Value == '') {
            ShowSwError(trans('field_is_required'));
            val.Value = pBuilder.getProprtyValue(path);
            e.target.val(val.Value);
            e.target.focus();
            e.target.select();
            return;
        } else if ($('#' + val.Value).length > 0) {
            ShowSwError(trans('id_exists'));
            val.Value = pBuilder.getProprtyValue(path);
            e.target.val(val.Value);
            e.target.focus();
            e.target.select();
            return;
        }
    }
    if (('role' in builder.settings) && builder.settings.role === 'append' && ('options' in builder.settings)) {
        var clssList = pBuilder.settings.attrs.class.split(' ');
        builder.settings.options.forEach(op => {
            if (op.value && op.value.length > 0) {
                var clsIndex = clssList.indexOf(op.value);
                if (clsIndex !== -1)
                    clssList.splice(clsIndex, 1);
            }
        });
        clssList.push(val.Value)
        val.Value = clssList.join(' ');
    }


    if (obHasProp(builder.settings, 'childs')) {
        builder.settings.childs.forEach(propCh => {

            propCh.settings.evntHandler(propCh);
        });

    }
    this.Fields[unique].Builder.setProprtyValue(path, val.Value)

};
ToolsDesigner.prototype.designId = function(type) {
    var id = 'design_' + type + "_" + (++this.ids).toString();
    while ($(this.getDraggable()).find('#' + id).length > 0)
        id = 'design_' + type + "_" + (++this.ids).toString();
    return id;
};
ToolsDesigner.prototype.uniqueId = function() {
    var unique = 'unique_' + (this.unIds += 5).toString();
    while (unique in this.Fields)
        unique = 'unique_' + (this.unIds += 5).toString();
    return unique;
};
ToolsDesigner.prototype.clearWindow = function() {
    this.addChangeToCach();
    this.unIds = 0;
    this.ids = 0;
    this.Fields = {};
    FieldsStorage().set({});
    this.current = null;
    var $sortable = $(this.getSortable())
    this.unbindEvents($sortable);
    $sortable.empty();
    $('#toolProprties').empty();
    $('.nav-tabs button[data-bs-target="#toolbox"]').tab('show');
};
ToolsDesigner.prototype.unbindEvents = function(selector) {
    selector.off();
    var evArry = ['mouseenter', 'mouseleave', 'click', 'focus', 'blur', 'keydown', 'keyup', 'change'],
        $el = selector.find('*');
    $el.off();
    evArry.forEach(e => {
        $el.find('*').off(e);
    });
};
ToolsDesigner.prototype.BuildElement = function($prnt, unique, isCol = false) {
    const element = this.Fields[unique];
    var opts_settings = $.extend(true, {}, element.Builder.settings);
    //data_id
    var id = (obHasProp(opts_settings.attrs, 'data_id') && opts_settings.attrs.data_id.length > 0) ? opts_settings.attrs.data_id : opts_settings.attrs.id;
    opts_settings.attrs.id = id.replace('design_', "");
    opts_settings.attrs.name = opts_settings.attrs.id;
    if (isCol)
        opts_settings.width = 6;
    var $builder = this.initToolsBuilder(opts_settings.attrs.id, opts_settings, false);
    $builder.getContent($prnt);
}
ToolsDesigner.prototype.changeSettingId = function(obj) {
    if (obj.type === 'row' || obj.type === 'col') {
        delete obj['attrs'];
    } else {
        var id = (obHasProp(obj.attrs, 'data_id') && obj.attrs.data_id.length > 0) ? obj.attrs.data_id : obj.attrs.id;
        obj.attrs.id = id.replace('design_', "");
        obj.attrs.name = obj.attrs.id;
        if (obj.type === 'checkbox' && obHasProp(obj, 'options') && obj.options.length > 0)
            obj.attrs.name += '[]';
    }
    if (obHasProp(obj, 'fieldUnique'))
        delete obj['fieldUnique'];
    if (obHasProp(obj, 'selector'))
        delete obj['selector'];
    return obj;
}
ToolsDesigner.prototype.BuildContentJson = function(isDesignMode = true) {
    var itmfield = $(this.getSortable()).find('div[field-type]:not([field-type="col"])').filter(function() {
        return $(this).parents('div[field-type="col"]').length == 0;
    });
    var FildsList = new Array();
    $.each(itmfield, (i, el) => {
        var $elm = $(el);
        var unique = $elm.attr('unique');
        var itemType = this.getFieldTypeAttr($elm);
        var itemObject = {
            type: itemType,
            settings: $.extend(true, {}, this.Fields[unique].Builder.settings),
        };
        if (!isDesignMode)
            this.changeSettingId(itemObject.settings);
        if (itemType === 'row') {
            itemObject['childs'] = new Array()
            var $cols = $elm.find('.el-row').find('div[field-type="col"]');
            if ($cols && $cols.length > 0) {
                $cols.each((j, col) => {
                    var colUnique = $(col).attr('unique');
                    var colObject = {
                        type: 'col',
                        settings: $.extend(true, {}, this.Fields[colUnique].Builder.settings),
                        childs: new Array()
                    };
                    if (!isDesignMode)
                        this.changeSettingId(colObject.settings);
                    var $ch = $(col).find('div[field-type]');
                    $ch.each((n, itm) => {
                        var itmUnique = $(itm).attr('unique');
                        var chType = this.getFieldTypeAttr($(itm));
                        var childObject = {
                            type: chType,
                            settings: $.extend(true, {}, this.Fields[itmUnique].Builder.settings),
                        };
                        if (!isDesignMode) {
                            childObject.settings.width = 6;
                            this.changeSettingId(childObject.settings);
                        }
                        colObject.childs.push(childObject);
                    });
                    itemObject.childs.push(colObject);
                });
            }
        }
        FildsList.push(itemObject);
    })
    return FildsList;
}
ToolsDesigner.prototype.saveJson = function() {
    var storage = this.BuildContentJson(false);
    console.clear();
    console.info(storage)
    var json = JSON.stringify(storage);

    var JaData = {
        FormData: {
            Title: "",
            FormName: "form"
        },
        FormJson: json
    };

    $.ajax({
        url: "saveForm.php",
        method: "POST",
        data: JaData,
        dataType: "json",
        complete: function(json) {
            try {
                var data = JSON.parse(json.responseText);
                if (data.status == 1) {
                    ShowSwSuccess(data.msg);
                } else {
                    if (data.msg) {
                        ShowSwError(data.msg);
                    } else
                        ShowSwError('خطأ في الحفظ');
                }
            } catch (error) {
                console.log(error.message);
                console.log(json.responseText);
            }
        }
    });
};
ToolsDesigner.prototype.handlePreviewHtml = function() {
    var storage = this.BuildContentJson(false);
    var form = $('<form></form>');
    if (storage && storage.length > 0) {
        getJsonArrayHtml(form, storage);
    }
    var cover = $('<div class="card card-primary"></div>').append('<div class="card-header"><p class="card-title p-1"></p></div>');
    var coverBdy = $('<div class="card-body p-1"></div>').append(form)
    cover.append(coverBdy)
    this.getDialogForm(cover);
};
ToolsDesigner.prototype.getDialogForm = function(h) {
    if (!this.dialog || !this.d_body) {
        if ($('body #dialog-form').length == 0) {
            $('body').append(` <div class="modal fade"  id="dialog-form" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true" aria-labelledby="myModalLabel19"> <div class="modal-dialog" > <div class="modal-content rounded-6 shadow"> <div class="modal-header border-bottom-1"> <button type="button" class="close" id="btn_close_modal">  <span aria-hidden="true">&times;</span> </button> <h5 class="modal-title" id="myModalLabel19">` + this.settings.PreviewHtmlTitle + `</h5> </div> <div class="modal-body p-4"> </div> <div class="modal-footer flex-column border-top-0">  </div> </div> </div> </div> `);
        }
        this.dialog = $('#dialog-form'),
            this.d_body = this.dialog.find(".modal-body");
        this.dialog.find('#btn_close_modal').click((ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            this.dialogModel.hide();
            // $('.el-dialog__wrapper').css('display', 'none');
            this.unbindEvents(this.d_body);
            this.d_body.empty();
        });
        /*   this.dialog.find('#btn_close_modal').on({
              click: (ev) => {
                  ev.preventDefault();
                  ev.stopPropagation();
                  this.dialogModel.hide();
                  // $('.el-dialog__wrapper').css('display', 'none');
                  this.unbindEvents(this.d_body);
                  this.d_body.empty();
              }
          }); */
    }
    this.d_body.empty().append(h);
    // $('.el-dialog__wrapper').css('display', 'block');
    this.dialogModel = new bootstrap.Modal(this.dialog, {
        backdrop: true,
    });
    this.dialogModel.show();
    /* this.dialogModel = this.dialog.modal({
        backdrop: false,
    }); */
};
ToolsDesigner.prototype.initDroppableTools = function() {
    this.droppableTools = {
        input: {
            label: trans('toolsText.input'),
            type: 'input',
            icon: 'icon-input',
            props: [
                this.fieldIdRule(),
                this.titleRule(),
                this.inputTypesRule(),
                this.infoRule(),
                this.helpTextRule(),
                this.requiredRule(), , {
                    type: 'InputNumber',
                    path: 'attrs.maxlength',
                    attrs: {
                        value: ''
                    },
                    title: trans('max_length')
                }, {
                    type: 'InputNumber',
                    path: 'attrs.minlength',
                    attrs: {
                        value: ''
                    },
                    title: trans('min_length')
                },
                this.placeholderRule(),
                this.disabledRule(),
                this.readonlyRule(),
                {
                    type: 'InputNumber',
                    path: 'attrs.rows',
                    info: trans('rows_info') + ' textarea',
                    attrs: {
                        min: 1,
                        value: 1
                    },
                    title: trans('rows_number')
                }, {
                    type: 'switch',
                    path: 'attrs.autocomplete',
                    attrs: {
                        activeValue: 'on',
                        inactiveValue: 'off',
                    },
                    title: trans('autocomplete')
                },
                {
                    type: 'switch',
                    path: 'attrs.autofocus',
                    attrs: {},
                    title: trans('autofocus')
                },
                this.themeTitleRule(),
                this.inlineTitleRule(),
                this.fieldSizeRule(),

                this.widthRule(),
                this.titleWidthRule(),
            ]
        },
        InputNumber: {
            label: trans('toolsText.InputNumber'),
            type: 'InputNumber',
            icon: 'icon-number',
            props: [
                this.fieldIdRule(),
                this.titleRule(),
                this.infoRule(),
                this.requiredRule(),
                {
                    type: 'InputNumber',
                    path: 'attrs.min',
                    attrs: {
                        value: ''
                    },
                    title: trans('min_value')
                }, {
                    type: 'InputNumber',
                    path: 'attrs.max',
                    attrs: {
                        value: ''
                    },
                    title: trans('max_value')
                }, {
                    type: 'InputNumber',
                    path: 'attrs.step',
                    attrs: {
                        min: 1,
                        value: 1
                    },
                    title: trans('steps')
                },
                this.disabledRule(),
                this.readonlyRule(),
                this.placeholderRule(),
                this.themeTitleRule(),
                {
                    type: 'switch',
                    path: 'verticalbuttons',
                    attrs: {},
                    title: trans('verticalbuttons')
                },
                this.inlineTitleRule(),

                this.widthRule(),
                this.titleWidthRule(),
            ]
        },
        radio: {
            label: trans('toolsText.radio'),
            type: 'radio',
            icon: 'icon-radio',
            props: [
                this.fieldIdRule(),
                this.titleRule(),
                this.infoRule(),
                this.requiredRule(),
                this.disabledRule(),
                {
                    type: 'input',
                    path: 'attrs.value',
                    attrs: {},
                    title: trans('checked_value')
                },
                this.OptionsListRule(),
                this.themeTitleRule(),

                this.inlineFieldsRule(),
                this.widthRule(),

            ]
        },
        checkbox: {
            label: trans('toolsText.checkbox'),
            type: 'checkbox',
            icon: 'icon-checkbox',
            props: [
                this.fieldIdRule(),
                this.titleRule(),
                this.infoRule(),
                this.requiredRule(),
                this.disabledRule(),
                {
                    type: 'input',
                    path: 'attrs.value',
                    attrs: {},
                    title: trans('checked_value')
                },
                this.OptionsListRule(),
                this.themeTitleRule(),
                this.inlineFieldsRule(),
                this.widthRule(),
            ]
        },
        select: {
            label: trans('toolsText.select'),
            type: 'select',
            icon: 'icon-select',
            props: [
                this.fieldIdRule(),
                this.titleRule(),
                this.infoRule(),
                this.helpTextRule(),
                this.requiredRule(),
                this.disabledRule(),
                this.placeholderRule(),
                {
                    type: 'input',
                    path: 'attrs.value',
                    attrs: {},
                    title: trans('selected_value')
                },
                this.OptionsListRule(),
                this.themeTitleRule(),
                this.inlineTitleRule(),
                this.fieldSizeRule(),

                this.widthRule(),
                this.titleWidthRule(),
            ]
        },
        switch: {
            label: trans('toolsText.switch'),
            type: 'switch',
            icon: 'icon-switch',
            props: [
                this.fieldIdRule(),
                this.titleRule(),
                this.requiredRule(),
                this.disabledRule(), {
                    type: 'input',
                    path: 'attrs.activeValue',
                    attrs: {},
                    title: trans('active_value')
                }, {
                    type: 'input',
                    path: 'attrs.inactiveValue',
                    attrs: {},
                    title: trans('inactive_value')
                },
                this.themeTitleRule(),

            ]
        },
        button: {
            label: trans('toolsText.button'),
            type: 'button',
            icon: 'icon-button',
            props: [
                this.fieldIdRule(),
                {
                    type: 'select',
                    title: trans('the_type'),
                    path: 'attrs.type',
                    attrs: {
                        value: 'button',
                    },
                    options: [{
                            label: "button",
                            value: "button",
                        },
                        {
                            label: "submit",
                            value: "submit",
                        },
                        {
                            label: "reset",
                            value: "reset",
                        },
                    ]
                },
                {
                    type: 'input',
                    path: 'attrs.value',
                    attrs: {},
                    title: trans('the_text'),
                    eventName: 'keyup'
                },
                this.themeTitleRule(),
                {
                    type: 'input',
                    path: 'attrs.css.width',
                    attrs: {},
                    title: trans('width')
                },
                this.centerAlignmentRule(),
                this.fieldSizeRule(),

                {
                    type: 'select',
                    title: trans('style'),
                    role: 'append',
                    path: 'attrs.class',
                    attrs: {
                        value: 'bg-gradient-primary'
                    },
                    options: [{
                            label: 'Primary',
                            value: 'bg-gradient-primary'
                        }, {
                            label: 'Default',
                            value: 'btn-default',
                        }, {
                            label: 'Success',
                            value: 'bg-gradient-success'
                        }, {
                            label: 'Info',
                            value: 'bg-gradient-info'
                        }, {
                            label: 'Warning',
                            value: 'bg-gradient-warning'
                        }, {
                            label: 'danger',
                            value: 'bg-gradient-danger'
                        },
                        {
                            label: 'Secondary',
                            value: 'bg-gradient-secondary'
                        },
                    ]
                },
            ]
        },
        upload: {
            label: trans('toolsText.upload'),
            type: 'upload',
            icon: 'icon-upload',
            props: [
                this.fieldIdRule(),
                this.titleRule(),
                {
                    type: 'checkbox',
                    title: trans('allowedFiles'),
                    path: 'acceptedFiles',
                    attrs: {
                        value: ''
                    },
                    options: [{
                        label: 'All Files',
                        value: '',
                    }, {
                        label: 'Image',
                        value: 'image/*',
                    }, {
                        label: 'Video',
                        value: 'video/*',
                    }, {
                        label: 'Audio',
                        value: 'audio/*',
                    }, {
                        label: 'Pdf Files',
                        value: 'application/pdf',
                    }, {
                        label: 'Microsoft Office',
                        value: 'application/vnd',
                    }, ]
                },
                this.themeTitleRule(),

                this.widthRule(),
            ]
        },
        span: {
            label: trans('toolsText.span'),
            type: 'span',
            icon: 'icon-span',
            props: [{
                    type: 'input',
                    path: 'attrs.text',
                    attrs: {},
                    title: trans('the_text'),
                    eventName: 'keyup'
                },
                this.themeTitleRule(),
                this.centerAlignmentRule('text-center', ''),
                {
                    type: 'select',
                    title: trans('fieldSize'),
                    path: 'attrs.class',
                    attrs: {
                        value: ''
                    },
                    options: [{
                        label: 'Normal',
                        value: '',
                    }, {
                        label: 'Heading 1',
                        value: 'h1',
                    }, {
                        label: 'Heading 2',
                        value: 'h2',
                    }, {
                        label: 'Heading 3',
                        value: 'h3',
                    }, {
                        label: 'Heading 4',
                        value: 'h4',
                    }, {
                        label: 'Heading 5',
                        value: 'h5',
                    }, {
                        label: 'Heading 6',
                        value: 'h6',
                    }, ]
                },

                this.widthRule(),
            ]
        },
        time: {
            label: trans('toolsText.time'),
            type: 'time',
            icon: 'icon-time',
            props: [
                this.fieldIdRule(),
                this.titleRule(),

            ]
        },
        date: {
            label: trans('toolsText.date'),
            type: 'date',
            icon: 'icon-date',
            props: [
                this.fieldIdRule(),
                this.titleRule(),

            ]
        },
        divider: {
            label: trans('toolsText.divider'),
            type: 'divider',
            icon: 'icon-divider',
            props: [
                this.themeTitleRule(),

                this.widthRule(),
            ]
        },
        row: {
            label: trans('toolsText.row'),
            type: 'row',
            icon: 'icon-row',
        },
        col: {
            label: trans('toolsText.col'),
            type: 'col',
            icon: 'icon-col',
            hidden: true
        },
    }
};
ToolsDesigner.prototype.fieldSizeRule = function() {
    return {
        type: 'select',
        title: trans('fieldSize'),
        path: 'attrs.fieldSize',
        attrs: {},
        options: [{
            label: 'Normal',
            value: '',
        }, {
            label: 'Large',
            value: 'lg'
        }, {
            label: 'Small',
            value: 'sm'
        }, {
            label: 'Extra Small',
            value: 'xs'
        }, ]
    };
};
ToolsDesigner.prototype.centerAlignmentRule = function(activeValue = 'form-group text-center', inactiveValue = 'form-group') {
    return {
        type: 'switch',
        path: 'groupClass',
        attrs: {
            activeValue: activeValue,
            inactiveValue: inactiveValue,
        },
        title: trans('center_alignment')
    };
};

ToolsDesigner.prototype.inputTypesRule = function() {
    var options = ['text', 'textarea', 'password', 'number', 'email', 'url', 'tel', 'date', 'datetime-local', 'month', 'week', 'search', 'time'];

    //,'range'

    var obj = {
        type: 'select',
        title: trans('the_type'),
        path: 'attrs.type',
        attrs: {
            value: 'text',
        },
        options: []
    };
    options.forEach(op => {
        obj.options.push({
            label: op,
            value: op,
        })
    });
    return obj;

};
ToolsDesigner.prototype.titleWidthRule = function() {
    return {
        type: 'InputNumber',
        path: 'titleWidth',
        attrs: {
            min: 10
        },
        title: trans('titleWidth')
    };
};
ToolsDesigner.prototype.widthRule = function() {
    return {
        type: 'InputNumber',
        path: 'width',
        attrs: {
            min: 2,
            max: 12
        },
        title: trans('width')
    };
};
ToolsDesigner.prototype.requiredRule = function() {
    return {
        type: 'switch',
        path: 'attrs.required',
        attrs: {},
        title: trans('required'),
        childs: [{
            type: 'input',
            path: 'attrs.required_valid_msg',
            groupClass: 'form-group d-none',
            attrs: {},
            title: trans('required_valid_msg'),
            evntHandler: (fld) => {


                // console.log("field:", fld);
                var val = fld.settings.fieldParent._inputValue();
                var $grp = fld.$template;
                var $prnt = $grp.parent().closest('div');
                $grp.removeClass('d-none')
                $prnt.removeClass('d-none')

                if (!val.Value) {
                    $(fld.settings.selector).val('');
                    $grp.addClass('d-none')
                    $prnt.addClass('d-none')

                    deleteObjVal(fld.settings.attrs, 'value')
                    deleteObjVal(this.Fields[fld.settings.unique].Builder.settings.attrs, 'required_valid_msg')
                }


            }
        }, ]
    };
};
ToolsDesigner.prototype.readonlyRule = function() {
    return {
        type: 'switch',
        path: 'attrs.readonly',
        attrs: {},
        title: trans('readonly')
    };
};
ToolsDesigner.prototype.OptionsListRule = function() {
    return {
        type: 'OptionsList',
        path: 'options',
        attrs: {},
    };
};
ToolsDesigner.prototype.helpTextRule = function() {
    return {
        type: 'input',
        path: 'helpText',
        attrs: {},
        title: trans('helpText')
    };
};
ToolsDesigner.prototype.titleRule = function() {
    return {
        type: 'input',
        path: 'title',
        attrs: {},
        title: trans('title'),
        eventName: 'keyup'
    };
};
ToolsDesigner.prototype.infoRule = function() {
    return {
        type: 'input',
        path: 'info',
        attrs: {},
        title: trans('info')
    };
};
ToolsDesigner.prototype.inlineTitleRule = function() {
    return {
        type: 'switch',
        path: 'inlineTitle',
        attrs: {},
        title: trans('inlineTitle')
    };
};
ToolsDesigner.prototype.inlineFieldsRule = function() {
    return {
        type: 'switch',
        path: 'inlineFields',
        attrs: {},
        title: trans('inlineFields')
    };
};
ToolsDesigner.prototype.disabledRule = function() {
    return {
        type: 'switch',
        path: 'attrs.disabled',
        attrs: {},
        title: trans('disabled')
    };
};
ToolsDesigner.prototype.placeholderRule = function() {
    return {
        type: 'input',
        path: 'attrs.placeholder',
        attrs: {},
        title: trans('hint'),
        eventName: 'keyup'
    };
};
ToolsDesigner.prototype.fieldIdRule = function() {
    return {
        isUnique: true,
        type: 'input',
        path: 'attrs.data_id',
        attrs: {
            required: true
        },
        title: trans('fieldId')
    };
};
ToolsDesigner.prototype.themeTitleRule = function() {
    return {
        type: 'span',
        spacerClass: '1',
        groupClass: 'danger text-center',
        attrs: {
            text: trans('theme'),
            class: 'text-center h4'
        },
    };
};