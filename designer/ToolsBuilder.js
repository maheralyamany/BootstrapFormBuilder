var defaultLangText = {
    en: {
        toolsText: {
            input: 'input',
            InputNumber: 'Input Number',
            radio: 'radio',
            checkbox: 'checkbox',
            select: 'select',
            switch: 'switch',
            time: 'time',
            date: 'date',
            upload: 'upload',
            span: 'Typography',
            button: 'button',
            divider: 'divider',
            row: 'row',
            col: 'col',
            cover: 'cover',
        },
        hint: 'The hint',
        disabled: 'Disabled',
        info: 'Info',
        title: 'The title',
        readonly: 'Read only',
        required: 'Required',
        required_valid_msg: 'Validation message',
        width: 'Width',
        style: 'style',
        button_type: 'Button Type',
        center_alignment: 'Center Alignment',
        inactive_value: 'Inactive value',
        active_value: 'Active value',
        selected_value: 'Selected Value',
        checked_value: 'Checked Value',
        steps: 'The steps',
        max_value: 'Max value',
        min_value: 'Min value',
        autofocus: 'Auto focus',
        autocomplete: 'Auto complete',
        rows: 'Rows Number',
        rows_info: 'Only on the type is ',
        min_length: 'Min length',
        max_length: 'Max length',
        the_type: 'The type',
        id_exists: 'The Entered Id is exists',
        field_is_required: 'The value of this field  is required',
        confirm_delete_item: 'Do you want  to confirm the deletion?',
        add_column_title: "add column to  this row",
        add_new_filed: "add new filed",
        delete_filed: "delete selected filed",
        copy_filed: "copy this filed",
        ok: 'Ok',
        cancel: 'Cancel',
        option: 'Option',
        options_title: "The Options",
        the_text: 'The text',
        value: 'Value',
        the_date: "The date",
        the_time: "The time",
        select_file: "Select the file",
        save: "Save",
        the_content: 'Some text',
        fieldId: 'field ID',
        fieldSize: 'The size',
        inlineTitle: 'Title in same line ',
        inlineFields: 'Fields in same line ',
        PreviewHtml: 'Preview design',
        ClearWindow: 'Clear window',
        ToolsHeaderText: 'Toolbox',
        ProprtiesHeaderText: 'Proprties',
        margin_top: 'Margin top',
        margin: 'The margin',
        theme: 'Themes',
        helpText: 'Help text',
        titleWidth: 'Title width',
        verticalbuttons: 'Vertical buttons',
        allowedFiles: 'Allowed file types',

    },
    ar: {
        toolsText: {
            input: 'حقل إدخال نصي',
            InputNumber: 'حقل إدخال رقمي',
            radio: 'أزرار الاختيار الأحادي',
            checkbox: 'أزرار الاختيار المتعدد',
            select: 'قائمة اختيار',
            switch: 'زر اختيار',
            time: 'حقل وقت',
            date: 'حقل تاريخ',
            upload: 'رفع ملف',
            span: 'نــــص',
            button: 'زر',
            divider: 'خط فاصل',
            row: 'صف',
            col: 'col',
            cover: 'إطار',
        },
        hint: 'التلميح',
        disabled: 'تعطيل الحقل',
        info: 'معلومات عن الحقل',
        title: 'عنوان الحقل',
        readonly: 'للقراءة فقط',
        required: 'الحقل مطلوب',
        required_valid_msg: 'رسالة التحقق',
        width: 'العرض',
        style: 'النمط',
        button_type: 'نوع الزر',
        center_alignment: 'توسيط الحقل',
        inactive_value: 'القيمة عند إلغاء التحديد',
        active_value: 'القيمة عند التحديد',
        selected_value: 'القيمة المختارة إفتراضياً',
        checked_value: 'القيمة المحددة إفتراضياً',
        steps: 'الخطوات لكل نقرة',
        max_value: 'أعلى قيمة للحقل',
        min_value: 'اقل قيمة للحقل',
        autofocus: 'التركيز التلقائي',
        autocomplete: 'الإكمال التلقائي',
        rows_number: 'عدد الصفوف',
        rows_info: 'فقط عندما يكون النوع  ',
        min_length: 'اقل طول للنص',
        max_length: 'اعلى طول للنص',
        the_type: 'النــوع',
        id_exists: 'معرّف الحقل  المدخل موجود',
        field_is_required: 'يجب الاتكون قيمة هذا الحقل فارغة',
        confirm_delete_item: 'هل تريد حذف الحقل المحدد؟',
        add_column_title: "إضافة عمود الى الصف",
        add_new_filed: "إضافة مدخل جديد",
        delete_filed: "حذف الحقل المحدد",
        copy_filed: "نسخ الحقل المحدد",
        ok: 'موافق',
        cancel: 'إلغاء',
        option: 'خيار',
        options_title: "الخيــارات",
        the_text: 'النـــص',
        value: 'القيمة',
        the_date: "التــاريخ",
        the_time: "الــــوقت",
        select_file: "حدد الملف",
        save: "حفـــظ",
        the_content: 'المحتــوى',
        fieldId: 'معرّف الحقل  (ID)',
        fieldSize: 'الحــــجم',
        inlineTitle: 'العنوان في نفس السطر',
        inlineFields: 'الحقول في نفس السطر',
        PreviewHtml: 'معاينة التصميم',
        ClearWindow: 'تنظيف الشاشة',
        ToolsHeaderText: ' الأدوات',
        ProprtiesHeaderText: 'الخصائص',
        margin_top: 'هامش أعلى',
        margin: 'الهـــامش',
        theme: 'الستايل',
        helpText: 'نص المساعدة',
        titleWidth: 'عَرض العنوان',
        verticalbuttons: 'ازرار عمودية',
        allowedFiles: 'أنواع الملفات المسموح بها',
    }
}
var currLang;
(function(a) {
    if (!a.observable) {
        a.observable = function(a) {
            var b = {},
                d = [].slice;
            a.on = function(c, d) {
                "function" === typeof d && c.replace(/[^\s]+/g, function(a, c) {
                    (b[a] = b[a] || []).push(d);
                    d.typed = 0 < c
                });
                return a
            };
            a.off = function(c) {
                c.replace(/[^\s]+/g, function(a) {
                    b[a] = []
                });
                "*" == c && (b = {});
                return a
            };
            a.one = function(b, d) {
                d && (d.one = !0);
                return a.on(b, d)
            };
            a.trigger = function(c) {
                for (var e = d.call(arguments, 1), g = b[c] || [], k = 0, f; f = g[k]; ++k) f.one && f.done || f.busy || (f.busy = !0, f.apply(a, f.typed ? [c].concat(e) : e), f.done = !0, f.busy = !1);
                return a
            };
            return a
        };
        var k = {};
        a.present = function(a, b) {
            k[a] = b
        };
        a.fn.present = function(a, b) {
            (b = k[a](this, b)) && this.data(a, b);
            return this
        }
    }
})("undefined" !== typeof exports ? exports : window.$ || (window.$ = {}));

function obHasProp(obj, k) {
    return obj && Object.hasOwnProperty.call(obj, k)
}

function deleteObjVal(obj, key) {
    if (obHasProp(obj, key))
        delete obj[key]
};

function trans(path) {
    function getValue(obj, path, def) {
        path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        path = path.replace(/^\./, ''); // strip a leading dot
        const a = path.split('.');
        for (let i = 0, l = a.length; i < l; ++i) {
            const n = a[i];
            if (n in obj) {
                obj = obj[n];
            } else {
                return def;
            }
        }
        return obj;
    }

    function getDef(path) {
        var pList = path.split('.');
        var len = pList.length;
        var def = pList[len - 1].replace('_', ' ');
        return def;
    }
    var def = getDef(path);
    try {
        if (!currLang) {
            currLang = $('html').attr('lang');
            if (!currLang) {
                var dir = $(document).find('[dir]').first().attr('dir');
                if (dir === 'rtl')
                    currLang = 'ar'
                else
                    currLang = 'en';
            }
            if (!(currLang in defaultLangText))
                currLang = 'en';
        }
        var opts_final = $.extend(true, {}, defaultLangText[currLang]);
        return getValue(opts_final, path, def);
    } catch (error) {
        console.info(currLang);
    }
    return def;
}

function getMarginAttr(t = "1", r = "0", b = "0", l = "0") {
    return {
        top: t,
        right: r,
        bottom: b,
        left: l,
    };
}
var defaultToolTypes = {
        input: "text",
        InputNumber: "text",
        date: "text",
        time: "text",
        upload: "file",
        checkbox: "checkbox",
        radio: "radio",
        switch: "checkbox",
    },
    toolsDesign = {
        input: {
            width: 12,
            info: null,
            title: trans('title'),
            spacerClass: "1",
            margin: getMarginAttr(),
            groupClass: "form-group",
            inlineTitle: false,
            helpText: null,
            type: 'input',
            attrs: {
                type: "text",
                class: "form-control",
                fieldSize: "sm",
            },
        },
        InputNumber: {
            width: 12,
            info: null,
            title: trans('title'),
            spacerClass: "1",
            margin: getMarginAttr(),
            groupClass: "form-group",
            type: 'InputNumber',
            verticalbuttons: false,
            attrs: {
                type: "text",
                value: 0,
                autocomplete: 'off',
                placeholder: '',
                step: 1,
            },
        },
        checkbox: {
            width: 12,
            info: null,
            title: trans('title'),
            type: 'checkbox',
            spacerClass: "1",
            margin: getMarginAttr(),
            groupClass: "form-check",
            titleClass: "form-label non-user-select",
            attrs: {
                type: "checkbox",
                class: 'form-check-input'
            },
            options: [{
                label: trans('option') + " 1",
                value: '1'
            }, {
                label: trans('option') + " 2",
                value: '2'
            }],
        },
        radio: {
            width: 12,
            info: null,
            title: trans('title'),
            type: 'radio',
            spacerClass: "1",
            margin: getMarginAttr(),
            titleClass: "col-form-label",
            groupClass: "form-group",
            attrs: {
                type: "radio",
            },
            options: [{
                label: trans('option') + " 1",
                value: '1'
            }, {
                label: trans('option') + " 2",
                value: '2'
            }],
        },
        OptionsList: {
            width: 12,
            title: trans("options_title"),
            type: 'OptionsList',
            spacerClass: "1",
            margin: getMarginAttr(),
            groupClass: "form-group",
            attrs: {
                type: "table",
            },
            columns: [trans('the_text'), trans('value'), ''],
            rows: [] //
                /*  rows: [{ label: 'option1', value: '1', operation: "<i class='fas fa-trash'></i>" }] */
        },
        switch: {
            width: 12,
            info: null,
            title: trans('title'),
            type: 'switch',
            spacerClass: "1",
            margin: getMarginAttr(),
            groupClass: "form-check form-switch",
            titleClass: 'form-check-label non-user-select',
            attrs: {
                type: "checkbox",
                class: 'form-check-input',
                role: "switch",
                activeValue: true,
                inactiveValue: false,
            },
        },
        select: {
            width: 12,
            info: null,
            title: trans('title'),
            spacerClass: "1",
            margin: getMarginAttr(),
            groupClass: "form-group",
            type: 'select',
            attrs: {
                class: "form-select",
                fieldSize: "sm",
            },
            options: [],
        },
        date: {
            width: 12,
            info: null,
            title: trans("the_date"),
            spacerClass: "1",
            margin: getMarginAttr(),
            titleClass: "custom-control-inline",
            groupClass: "form-group",
            type: 'date',
            attrs: {
                class: "form-control",
            },
        },
        time: {
            width: 12,
            info: null,
            title: trans("the_time"),
            spacerClass: "1",
            margin: getMarginAttr(),
            titleClass: "custom-control-inline",
            groupClass: "form-group",
            type: 'time',
            attrs: {
                class: "form-control",
            },
        },
        upload: {
            width: 12,
            info: null,
            title: trans("select_file"),
            spacerClass: "1",
            acceptedFiles: '',
            margin: getMarginAttr(),
            groupClass: "form-group",
            isBuilder: true,
            type: 'upload',
            attrs: {
                /*  accept:'image/*' */
            },
        },
        button: {
            width: 12,
            spacerClass: "1",
            margin: getMarginAttr(),
            type: 'button',
            groupClass: "form-group",
            content: '',
            attrs: {
                type: 'button',
                value: trans("save"),
                class: "btn bg-gradient-primary",
                css: {
                    width: '100px'
                }
            },
        },
        span: {
            width: 12,
            spacerClass: "1",
            margin: getMarginAttr(),
            groupClass: "",
            type: 'span',
            attrs: {
                text: trans('the_content')
            },
        },
        divider: {
            width: 12,
            spacerClass: "1",
            margin: getMarginAttr(),
            groupClass: "",
            type: 'divider',
            attrs: {},
        },
    },
    optionsListRow = {
        label: {
            width: 0,
            type: 'input',
            path: 'label',
            title: "",
            spacerClass: "0",
            margin: getMarginAttr("0"),
            groupClass: "",
            attrs: {
                class: "form-control",
                fieldSize: "sm",
            },
        },
        value: {
            width: 0,
            type: 'input',
            title: "",
            path: 'value',
            groupClass: "",
            spacerClass: "0",
            margin: getMarginAttr("0"),
            attrs: {
                class: "form-control text-center",
                fieldSize: "sm",
                css: {
                    'max-width': '60px'
                }
            },
        },
        operation: {
            width: 0,
            path: 'remove',
            spacerClass: "0",
            margin: getMarginAttr(""),
            type: 'span',
            content: "<i class='fas fa-trash'></i>",
            attrs: {
                text: "",
                role: "button",
                class: 'btn danger',
                'd-remove': 'true'
            },
            eventName: 'click'
        }
    },
    toolsBuilderTtemsIds = 0;
let destroyedObjectsType = ['InputNumber'];

function CompareObjectValue(obj, key, val) {
    var walk = (node1, node2) => {
        // different types, return false
        if (typeof node1 !== typeof node2) return false
        if (node1 && node2 && typeof node1 === 'object') {
            const keys = Object.keys(node1)
                // if type object, check same number of keys and walk on node1, node2
            return keys.length === Object.keys(node2).length &&
                keys.every(k => walk(node1[k], node2[k]))
        }
       
        // not object and types are same, return if node1 is equal to node2
        // let values = arrByID.map(a => a.value);
        /*  var res=Object.keys(data1).filter((key) => !walk(data1[key], data2[key]))  */
        return node1 === node2
    };
    return ((key in obj) && walk(obj[key], val))
}

function FieldsStorage() {
    var a = 'DesignerFields';
    var k = localStorage;
    return {
        get: function() {
            try {
                if ((k && k[a])) {
                    var res = JSON.parse(k[a]);
                    return res;
                }
            } catch (error) {
                console.info('get Fields Storage error', error);
            }
            return {};
        },
        set: function(e) {
            try {
                var kk = JSON.stringify(e);
                k[a] = kk
            } catch (error) {
                console.info('set Fields Storage error', error);
                k[a] = '{}';
            }
        }
    }
}

function ShowSwError(msg) {
    Swal.fire({
        type: 'error',
        title: msg,
        showConfirmButton: false,
        timer: 2000
    });
}

function ShowSwSuccess(msg) {
    Swal.fire({
        type: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1800
    });
}

function SwalConfirm(options, confirmCallBack, cancelCallBack) {
    var defaultParams = {
        title: '',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: trans('ok'),
        cancelButtonText: trans('cancel'),
        reverseButtons: true,
        showConfirmButton: true,
        titleText: '',
        text: '',
        html: '',
        footer: '',
        toast: false,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        buttonsStyling: true,
        focusConfirm: true,
        focusCancel: false,
        showCloseButton: true,
        closeButtonHtml: '&times;',
        showLoaderOnConfirm: false,
        width: null,
        padding: null,
        background: null,
        input: null,
        inputPlaceholder: '',
        inputValue: '',
        inputOptions: {},
        inputAutoTrim: true,
        inputClass: '',
        inputAttributes: {},
        inputValidator: null,
        validationMessage: null,
        grow: false,
        position: 'center',
        progressSteps: [],
        currentProgressStep: null,
        progressStepsDistance: null,
        onBeforeOpen: null,
        onOpen: null,
        onRender: null,
        onClose: null,
        onAfterClose: null,
        onAfterClose: null,
        scrollbarPadding: true
    };
    var iconTypes = ['success', 'warning', 'info', 'question', 'error'];
    options = $.extend(true, {}, defaultParams, options);
    Swal.fire(options).then((result) => {
        if (result.value) {
            if (confirmCallBack)
                confirmCallBack();
        } else if (result.dismiss === 'cancel') {
            if (cancelCallBack)
                cancelCallBack();
        }
    });
}
const observalbe = (target, callback, _base = []) => {
    for (const key in target) {
        if ((typeof target[key] === 'object') && target[key]) {
            target[key] = observalbe(target[key], callback, [..._base, key])
        }
    }
    return new Proxy(target, {
        set(target, key, value) {
            if (typeof value === 'object') {
                value = observalbe(value, callback, [..._base, key])
            }
            callback([..._base, key], target[key] = value)
            return value
        }
    })
}

function getJsonArrayHtml(parent, jsonArray) {
    if (jsonArray && jsonArray.length > 0) {
        // var container = $('#toolsContainer');
        jsonArray.forEach(el => {
            if (el.type === "row") {
                if (obHasProp(el, 'childs') && el.childs.length > 0) {
                    var $rowH = $('<div class="row"></div>');
                    parent.append($rowH);
                    var colCont = 1;
                    el.childs.forEach(colmn => {
                        var $colH = $('<div class="col-6"></div>');
                        if (obHasProp(colmn, 'childs') && colmn.childs.length > 0) {
                            colmn.childs.forEach(ch => {
                                // ch.settings.width = 6
                                new ToolsBuilder(ch.settings, false).getContent($colH)
                            });
                        }
                        $rowH.append($colH);
                        if (colCont == 2) {
                            colCont = 0;
                            $rowH = $('<div class="row"></div>');
                            parent.append($rowH);
                        }
                        colCont += 1;
                    });
                }
            } else {
                var $colH = $('<div class="col-12"></div>');
                parent.append($colH);
                new ToolsBuilder(el.settings, false).getContent($colH)
            }
        });
    }
}

function ToolsBuilder(options, designTime, changedCallback) {
    var
        isDesignTime, ItemObjects, $template, settings = {},
        container, $fieldLabel;
    const observCallback = changedCallback;
    Object.defineProperty(this, '$fieldLabel', {
        get: function() {
            return $fieldLabel;
        },
        set: function(value) {
            $fieldLabel = value;
        }
    });
    Object.defineProperty(this, 'observCallback', {
        get: function() {
            return observCallback;
        },
        set: function(value) {
            observCallback = value;
        }
    });
    Object.defineProperty(this, '$template', {
        get: function() {
            return $template;
        },
        set: function(value) {
            $template = value;
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
    Object.defineProperty(this, 'isDesignTime', {
        get: function() {
            return isDesignTime;
        },
        set: function(value) {
            isDesignTime = value;
        }
    });
    Object.defineProperty(this, 'ItemObjects', {
        get: function() {
            return ItemObjects;
        },
        set: function(value) {
            ItemObjects = value;
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
    $.observable(this);
    this.onChangedCallback();
    this.init(options, designTime);
}
ToolsBuilder.prototype.onChangedCallback = function() {
    if (this.observCallback)
        this.observCallback()
}
ToolsBuilder.prototype.init = function(options, designTime) {
    this.isDesignTime = designTime;
    this.settings = this._extendField(options);
}
ToolsBuilder.prototype._extendField = function(options) {
    if (!('type' in options)) {
        console.error("options lacks a 'type' in payload", options)
        return null;
    }
    var opts_final = $.extend(true, {}, toolsDesign[options.type]);
    if (!('attrs' in options))
        options.attrs = $.extend(true, {}, opts_final.attrs);
    if (!('type' in options.attrs) && (options.type in defaultToolTypes))
        options.attrs.type = defaultToolTypes[options.type];
    if (!('id' in options.attrs))
        options.attrs.id = ('data_id' in options.attrs) ? options.attrs.data_id : this.uniqueId();
    if (!('data_id' in options.attrs)) {
        //'design_' +
        options.attrs.data_id = options.attrs.id;
        if (options.attrs.data_id.startsWith('design_'))
            options.attrs.data_id = options.attrs.data_id.replace('design_', '');
    }


    // titleClass:'custom-control-inline',
    options = $.extend(true, {}, opts_final, options);
    if (options.type === 'checkbox') {
        options.titleClass = 'col-form-label non-user-select';
        options.attrs.class = 'form-check-input';
        options.groupClass = "form-group";
    }
    var ASS = ['readonly', 'disabled', 'autocomplete', 'autofocus', 'required'];

    $.each(options.attrs, (key, value) => {
        if (ASS.includes(key) && (!value || value === "false"))
            delete options.attrs[key];
    });
    return options;
}
ToolsBuilder.prototype.setAttrsValue = function(path, value) {
    this.onChangedCallback();
    var schema = this.settings;
    var pList = path.split('.');
    var len = pList.length;
    for (var i = 0; i < len - 1; i++) {
        var elem = pList[i];
        if (!schema[elem]) schema[elem] = {}
        schema = schema[elem];
    }
    schema[pList[len - 1]] = value;
}
ToolsBuilder.prototype.setProprtyValue = function(path, value) {
    //'attrs.value'
    this.setAttrsValue(path, value);
    var handled = false;
    if (path === 'title') {
        if (this.$fieldLabel && value && value.length > 0) {
            handled = true;
            this.$fieldLabel.text(value);
        } else
            deleteObjVal(this.settings, 'titleWidth')
    } else if (path === 'titleWidth' && (this.$fieldLabel)) {
        handled = true;
        this.$fieldLabel.css('width', value + "px");
    } else if (['attrs.readonly', 'attrs.disabled', 'attrs.placeholder', 'attrs.maxlength', 'attrs.minlength', 'attrs.rows', 'attrs.autocomplete', 'attrs.autofocus', 'attrs.required', 'attrs.required_valid_msg'].includes(path)) {
        handled = true;
        var att = path.split('.')[1];
        this.$template.find(this.settings.selector).removeAttr(att);
        if (value && value.length > 0)
            this.$template.find(this.settings.selector).attr(att, value);
    } else if (path === 'width') {
        handled = true;
        this.checkContainerClass();
    } else if (path === 'inlineFields') {
        handled = true;
        var $frmCheck = this.$template.find('div[role="form-check"]');
        var remClss = (!value) ? 'form-check-inline' : 'form-check';
        var addClss = (!value) ? 'form-check' : 'form-check-inline';
        $frmCheck.removeClass(remClss)
        $frmCheck.addClass(addClss)
    } else if (path === 'attrs.value') {
        if (this.settings.type === 'radio') {
            handled = true;
            this.$template.find(this.settings.selector).removeAttr('checked');
            if (value && value.length > 0)
                this.$template.find(this.settings.selector + '[value="' + value + '"]').attr('checked', 'checked');
        } else if (this.settings.type === 'checkbox') {
            handled = true;
            this.$template.find(this.settings.selector).removeAttr('checked');
            if (value && value.length > 0) {
                var valArr = this.settings.attrs.value.split(',');
                valArr.forEach(v => {
                    this.$template.find(this.settings.selector + '[value="' + v + '"]').attr('checked', 'checked');
                });
            }
        } else if (this.settings.type === 'select') {
            handled = true;
            this.$template.find('option').removeAttr('selected');
            if (value && value.length > 0)
                this.$template.find('option[value="' + value + '"]').attr('selected', true);
        }
    } else if (path === 'inlineTitle') {
        this.checkInlineControl();
    }
    if (!handled) {
        console.info(path + "  \n", 'not handled')
        this.replaceContent();
    }
};
ToolsBuilder.prototype.getProprtyValue = function(path) {
    if (path === 'titleWidth') {
        if (obHasProp(this.settings, 'titleWidth'))
            return this.settings.titleWidth;

        return (this.$fieldLabel) ? this.$fieldLabel.outerWidth() : '';
    }
    var obj = $.extend(true, {}, this.settings);
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, ''); // strip a leading dot
    const a = path.split('.');
    for (let i = 0, l = a.length; i < l; ++i) {
        const n = a[i];
        if (n in obj) {
            obj = obj[n];
        } else {
            return null;
        }
    }
    return obj;
};
ToolsBuilder.prototype._inputValue = function() {
    var selector = this.settings.selector,
        Element = $(selector),
        type = this.settings.type,
        Value = null;
    if (Element) {
        if (type === 'switch') {
            var prop = Element.is(":checked") ? 'activeValue' : 'inactiveValue';
            Value = this.settings.attrs[prop];
        } else if (Element.prop("nodeName") == "P" || type === "radio") {
            Value = $(selector + ':checked').val()
        } else if (type === 'checkbox') {
            // Value = Element.is(":checked")
            var ValArr = new Array();
            $.each($(selector + ':checked'), function(ii, ee) {
                ValArr.push($(ee).val())
            });
            if (ValArr.length > 0)
                Value = ValArr.join(',');
        } else
            Value = Element.val()
    }
    this.settings.attrs.value = Value;
    return {
        Value: Value,
        Type: type
    }
}
ToolsBuilder.prototype.replaceContent = function() {
    this.container.empty();
    this.getContent();
}
ToolsBuilder.prototype.initContainer = function(container = null) {
    if (container) {
        this.container = $(container);
        this.checkContainerClass();
    }
}
ToolsBuilder.prototype.checkContainerClass = function() {
    var classList = this.container.attr('class');
    if (classList && classList.length > 0) {
        classList.split(' ').forEach(op => {
            if (op && op.length > 0 && op.startsWith('col-'))
                this.container.removeClass(op)
        });
    }
    var wdth = this.getVal(this.settings, 'width', 0);
    if (wdth > 0) {
        wdth = 'col-' + wdth;
        if (!this.container.hasClass(wdth))
            this.container.addClass(wdth)
    }
}
ToolsBuilder.prototype.getContent = function(container = null) {
    this.initContainer(container);
    if (!this.container)
        return;
    if (this.$template)
        this.unbindEvents(this.$template);
    if (this.settings) {
        if (this.ItemObjects && this.ItemObjects.length > 0 && 'destroy' in this.ItemObjects && (destroyedObjectsType.includes(this.settings.type))) {
            this.ItemObjects.destroy();
        }
        this.$template = this._buildField();
        this.container.append(this.$template)
        this.initEventListner();
    }
};
ToolsBuilder.prototype.calcTitleWidth = function() {
    var lbl = $('label[for="' + this.settings.attrs.id + '"]');
    if (lbl.length === 0) {
        let b = null;
        b = setTimeout(() => {
            clearInterval(b)
            b = null
            this.calcTitleWidth();
        }, 100);
    } else {
        this.settings.titleWidth = lbl.outerWidth();
        this.$fieldLabel.attr('def-w', this.settings.titleWidth)
    }
};
ToolsBuilder.prototype.unbindEvents = function(selector) {
    selector.off();
    var evArry = ['mouseenter', 'mouseleave', 'click', 'focus', 'blur', 'keydown', 'keyup', 'change'],
        $el = selector.find('*');
    $el.off();
    evArry.forEach(e => {
        $el.find('*').off(e);
    });
}
ToolsBuilder.prototype.initEventListner = function() {
    // if (!CompareObjectValue(this.settings, 'eventsInitialized', true))
    if (('events' in this.settings) && this.settings.events.length > 0) {
        this.settings.events.forEach(ev => {
            if (!('selector' in ev))
                ev.selector = this.settings.selector;
            $(ev.selector).on(ev.on, (e) => {
                // console.info(ev.on,e.code)
                var trgt = {
                    target: $(e.currentTarget),
                    builder: this
                };
                if (ev.handler && ev.handler.length > 0)
                    ev.handler(trgt);
            });
        });
        this.settings['eventsInitialized'] = true;
    }
}
ToolsBuilder.prototype.getLabel = function() {
    var field = this.settings;
    if (!this.isObjNonVal(field, 'title')) {
        var cls = (!this.isObjNonVal(field, 'titleClass')) ? field.titleClass : '';
        var lblAttr = {
            class: cls,
            text: field.title
        };
        //if (field.type != "switch")
        lblAttr['for'] = field.attrs.id;
        this.$fieldLabel = $('<label/>', lblAttr);
        if (('required' in field.attrs) && field.attrs.required) {
            this.$fieldLabel.append(`<span  class="is-required"> * </span>`);
        }
        if (('info' in field) && field.info) {
            var $tooltip = $(`<span role="button" class="el_tooltip_popper"> <i class="fas fa-info-circle"></i> <div class="el_tooltip" x-placement="bottom">` + field.info + `<div class="el_tooltip_arrow"></div> </div> </span>`);
            this.$fieldLabel.append($tooltip);
        }
        var wdth = this.getVal(this.settings, 'titleWidth', null);
        wdth = (!wdth) ? 'auto' : wdth + 'px'
        this.$fieldLabel.css('width', wdth);
        return this.$fieldLabel;
    }
    return $('<label/>', {
        class: 'd-none'
    });
};
/* ToolsBuilder.prototype.getItmMarginsClass = function () {
    var m = this.settings.margin;
    if(m.top===m.right===m.bottom===m.left)
    return ' mrg-' + m.top;
    return ' mrgt-' + m.top + ' mrgr-' + m.right + ' mrgb-' + m.bottom + ' mrgl-' + m.left;
}; */
ToolsBuilder.prototype.getItmMarginsClass = function() {
    try {
        var m = this.settings.margin;
        /* if(m.top===m.right===m.bottom===m.left)
        mrg= 'margin:' + m.top+'rem !important;'; */
        return 'style="margin:' + m.top + 'rem ' + m.right + 'rem ' + m.bottom + 'rem ' + m.left + 'rem !important;"';
    } catch (error) {
        return '';
    }
};
ToolsBuilder.prototype.getItmGroupHtml = function() {
    if (!this.isObjNonVal(this.settings, 'groupClass'))
        this.settings.groupClass = this.removeItemClass(this.settings.groupClass, 'm-0 mrg-0 custom-control custom-checkbox')
    var itmClass = this.getVal(this.settings, 'groupClass', '');
    if (itmClass && itmClass.length > 1)
        itmClass = 'class="' + itmClass + '"  ';
    //  var mt = this.getVal(this.settings, 'spacerClass', '0');
    //  itmClass += (mt && mt.length > 0 && mt !== '') ? 'mrgt-' + mt : '';
    var styl = this.getItmMarginsClass();
    return $('<div ' + itmClass + styl + '></div>');
};
ToolsBuilder.prototype.removeItemClass = function(srsclss, distclss) {
    if (!srsclss || srsclss.length == 0)
        return '';
    if (!distclss || distclss.length == 0)
        return srsclss;
    var srsclssList = srsclss.split(' ');
    var distclssList = distclss.split(' ');
    distclssList.forEach(op => {
        if (op && op.length > 0) {
            var clsIndex = srsclssList.indexOf(op);
            if (clsIndex !== -1)
                srsclssList.splice(clsIndex, 1);
        }
    });
    return srsclssList.join(' ');
};
ToolsBuilder.prototype.addItemClass = function(srsclss, distclss) {
    if (!srsclss || srsclss.length == 0)
        srsclss = '';
    if (!distclss || distclss.length == 0)
        return srsclss;
    var srsclssList = srsclss.split(' ');
    var distclssList = distclss.split(' ');
    distclssList.forEach(op => {
        if (op && op.length > 0) {
            if (!srsclssList.includes(op))
                srsclssList.push(op);
        }
    });
    return srsclssList.join(' ');
};
ToolsBuilder.prototype.checkInlineControl = function() {
    if (!this.isObjNonVal(this.settings, 'titleClass')) {
        this.settings.titleClass = this.removeItemClass(this.settings.titleClass, 'custom-control-inline form-label-inline form-label col-auto')
    }
    if (!this.isObjNonVal(this.settings, 'groupClass')) {
        this.settings.groupClass = this.removeItemClass(this.settings.groupClass, 'row p-0')
    }
    if (this.hasInlineTitle()) {
        if (this.isObjNonVal(this.settings, 'titleClass'))
            this.settings.titleClass = ''
        this.settings.titleClass = this.addItemClass(this.settings.titleClass, 'form-label-inline col-auto')
        if (this.isObjNonVal(this.settings, 'groupClass'))
            this.settings.groupClass = ''
        this.settings.groupClass = this.addItemClass(this.settings.groupClass, 'row p-0')
    } else {
        this.settings.titleClass = 'form-label'
    }
};
ToolsBuilder.prototype.hasInlineTitle = function() {
    return (!this.isObjNonVal(this.settings, 'inlineTitle') && this.settings.inlineTitle)
};
ToolsBuilder.prototype._buildField = function() {
    this.$fieldLabel = null;
    var $itmHtml = this.getItmGroupHtml();
    this.settings.selector = '#' + this.settings.attrs.id;
    switch (this.settings.type) {
        case "OptionsList":
            var curId = this.settings.attrs.id;
            this.ItemObjects = new Array();
            $itmHtml.append(this.getLabel());
            this.settings.attrs.class = 'table table-bordered table-sm';
            this.settings.attrs.role = 'options';
            var $tbl = $('<table/>', this.settings.attrs);
            //var $tbl = $('<table class="table table-bordered table-responsive-sm"></table>');
            var $thead = $('<tr></tr>');
            var $tbody = $('<tbody></tbody>');
            $tbl.append(($('<thead></thead>').append($thead)))
            $tbl.append($tbody)
            this.settings.columns.forEach((col, index) => {
                //
                var th = `<th class="text-center">` + col + `</th>`;
                if (index === 2)
                    th = `<th class="text-center"><span role="button" add_row="true" class="btn p-0" ><i class="fas fa-plus"></i></span></th>`;
                $thead.append(th);
            });
            if (('rows' in this.settings) && this.settings.rows.length > 0) {
                this.settings.rows.forEach((row, index) => {
                    // row.label optionsListRow
                    var $brow = $('<tr></tr>');
                    $tbody.append($brow);
                    var rowItems = $.extend(true, {}, optionsListRow),
                        rowObj = {};
                    $.each(rowItems, (key, value) => {
                        if (key in row) {
                            var val = row[key];
                            if (key === 'operation') {
                                value.content = val;
                                value.attrs.text = '';
                            } else
                                value.attrs.value = val;
                        }
                        value.attrs.id = curId + '_' + key + '_' + index;
                        if ((!(('eventName' in value) && value.eventName.length > 0))) value.eventName = 'change';
                        var $td = $('<td class="text-center"></td>');
                        $brow.append($td);
                        var builder = new ToolsBuilder(value, false);
                        builder.container = $td;
                        rowObj[key] = builder;
                    });
                    this.ItemObjects.push(rowObj)
                });
            }
            $itmHtml.append($tbl);
            break
        case "span":
            var $spn = $('<span/>', this.settings.attrs);
            if (('content' in this.settings) && this.settings.content.length > 0)
                $spn.append(this.settings.content);
            $itmHtml.append($spn);
            break
        case "divider":
            $itmHtml.append($('<hr/>', this.settings.attrs));
            break
        case "button":
            // $itmHtml.append(this.getLabel());
            var $btn;
            if (obHasProp(this.settings, 'content') && this.settings.content.length > 0) {
                if (obHasProp(this.settings.attrs, 'value'))
                    this.settings.attrs.text = this.settings.attrs.value;
                $btn = $('<button/>', this.settings.attrs);
                $btn.append(this.settings.content);
            } else {
                $btn = $('<input />', this.settings.attrs);
            }
            if (!this.isObjNonVal(this.settings.attrs, 'fieldSize'))
                $btn.addClass("btn-" + this.settings.attrs.fieldSize)
            $itmHtml.append($btn);
            break
        case "input":
            $itmHtml.append(this.getLabel());
            //fieldSize: "form-control-sm",  class: "form-control",   class: "btn bg-gradient-primary",
            var $inpt = $('<input/>', this.settings.attrs)
            if (this.settings.attrs.type === 'textarea')
                $inpt = $('<textarea/>', this.settings.attrs)
            var hasHelpText = (!this.isObjNonVal(this.settings, 'helpText'));
            if (!this.isObjNonVal(this.settings.attrs, 'fieldSize'))
                $inpt.addClass("form-control-" + this.settings.attrs.fieldSize)
            if (this.hasInlineTitle()) {
                if (hasHelpText)
                    $itmHtml.append($('<div class="custom-control-inline col"></div>').append($('<div style=" width: 100% !important;"></div>').append($inpt)))
                else
                    $itmHtml.append($('<div class="custom-control-inline col"></div>').append($inpt))
            } else
                $itmHtml.append($inpt);
            if (hasHelpText) {
                var InputIdAttr = this.settings.attrs.data_id;
                $itmHtml.find(this.settings.selector).parent().closest('div').append(`<div class="help-feedback text-muted form-text" id="` + InputIdAttr + `-HelpText" >` + this.settings.helpText + `</div>`)
            }
            break
        case "InputNumber":

            $itmHtml.append(this.getLabel());
            this.settings.attrs.class = 'input-sm';
            var $inpt = $('<input/>', this.settings.attrs);
            $itmHtml.append($inpt);
            this.ItemObjects = new TouchNumberSpin($inpt, this.settings);
            break
        case "checkbox":
            deleteObjVal(this.settings.attrs, 'name');
            var isNoOp = this.isObjNonVal(this.settings, 'options');
            var isNotitle = this.isObjNonVal(this.settings, 'title');
            if (isNotitle && isNoOp)
                this.settings.title = " ";
            if (isNoOp) {
                this.settings.attrs.name = this.settings.attrs.data_id;
                $itmHtml.append($('<input/>', this.settings.attrs));
                var lbl = this.getLabel();
                $itmHtml.append(lbl);
            } else {
                this.settings.attrs.name = this.settings.attrs.data_id + '[]';
                var lbl = this.getLabel();
                lbl.removeAttr('for');
                $itmHtml.append(lbl);
                var $blk = $('<div class="pl-3 pr-3 pb-2 pt-1"></div>');
                $itmHtml.append($blk);
                this.settings.selector = 'input[type="checkbox"][name="' + this.settings.attrs.name + '"]';
                var isinline = this.getVal(this.settings, 'inlineFields', false);
                var checkClss = (!isinline) ? 'form-check' : 'form-check-inline';
                var radAttrs = $.extend(true, {}, this.settings.attrs);
                delete radAttrs['id'];
                radAttrs['type'] = "checkbox";
                this.settings.options.forEach((op, index) => {
                    radAttrs['id'] = this.settings.attrs.data_id + '_' + op.value;
                    radAttrs['value'] = op.value;
                    var $parent = $('<div />', {
                        class: checkClss + ' mt-2',
                        role: 'form-check'
                    });
                    $parent.append($('<input/>', radAttrs));
                    $parent.append($('<label />', {
                        class: 'form-check-label non-user-select',
                        text: op.label,
                        for: radAttrs['id']
                    }));
                    $blk.append($parent);
                })
                if (isinline)
                    $itmHtml.find('input[type="checkbox"]').addClass('mt-1');
            }
            if (!this.isObjNonVal(this.settings.attrs, 'value')) {
                var valArr = this.settings.attrs.value.split(',');
                valArr.forEach(v => {
                    $itmHtml.find('input[type="checkbox"][value="' + v + '"]').attr('checked', 'checked');
                });
            }
            break
        case "radio":
            if (this.isObjNonVal(this.settings, 'options'))
                return;
            var lbl = this.getLabel();
            lbl.removeAttr('for');
            $itmHtml.append(lbl);
            var $blk = $('<div class="pl-3 pr-3 pb-2 pt-1"></div>');
            $itmHtml.append($blk);
            this.settings.selector = 'input[type="radio"][name="' + this.settings.attrs.id + '"]';
            var isinline = this.getVal(this.settings, 'inlineFields', false);
            var checkClss = (!isinline) ? 'form-check' : 'form-check-inline';
            var radAttrs = $.extend(true, {}, this.settings.attrs);
            delete radAttrs['id'];
            radAttrs['class'] = "form-check-input";
            radAttrs['type'] = "radio";
            this.settings.options.forEach((op, index) => {
                /*  if ('checked' in radAttrs)
                     delete radAttrs['checked']; */
                radAttrs['name'] = this.settings.attrs.id;
                radAttrs['id'] = this.settings.attrs.id + (index).toString();
                radAttrs['value'] = op.value;
                /*  if (('value' in this.settings.attrs) && op.value === this.settings.attrs.value)
                     radAttrs['checked'] = true; */
                var $parent = $('<div />', {
                    class: checkClss + ' mt-2',
                    role: 'form-check'
                });
                $parent.append($('<input/>', radAttrs));
                $parent.append($('<label />', {
                    class: 'form-check-label non-user-select',
                    text: op.label,
                    for: radAttrs['id']
                }));
                $blk.append($parent);
            })
            if (('value' in this.settings.attrs))
                $itmHtml.find('input[type="radio"][value="' + this.settings.attrs.value + '"]').attr('checked', 'checked');
            if (isinline)
                $itmHtml.find('input[type="radio"]').addClass('mt-1');
            break
        case "switch":
            //custom-control-inline
            if (this.isObjNonVal(this.settings, 'title'))
                this.settings.title = " ";
            this.settings.attrs.class = 'form-check-input';
            if (('value' in this.settings.attrs))
                this.settings.attrs.checked = (this.settings.attrs.value === this.settings.attrs.activeValue);
            var $inpt = $('<input/>', this.settings.attrs);
            var $lbl = this.getLabel();
            $itmHtml.append($inpt);
            $itmHtml.append($lbl);
            break
        case "date":
            var $inpt = $('<input/>', this.settings.attrs);
            $itmHtml.append(this.getLabel());
            var $parent = $('<div />', {
                class: 'input-group'
            });
            $parent.append($inpt);
            $parent.append(`<span class="input-group-append"><span class="input-group-text"><i class="fas fa-calendar-check"></i></span></span>`);
            var $blok = $('<div />', {
                class: 'custom-control-inline'
            });
            $blok.append($parent);
            $itmHtml.append($blok);
            if (!this.isDesignTime)
                $inpt.datepicker({
                    autoclose: true
                });
            break
        case "time":
            var $inpt = $('<input/>', this.settings.attrs);
            $itmHtml.append(this.getLabel());
            var $parent = $('<div />', {
                class: 'input-group clockpicker'
            });
            $parent.append($inpt);
            $parent.append(`<span class="input-group-append"><span class="input-group-text"><i class="fas fa-clock"></i></span></span>`);
            var $blok = $('<div />', {
                class: 'custom-control-inline'
            });
            $blok.append($parent);
            $itmHtml.append($blok);
            //if (!this.isDesignTime)
            $inpt.clockpicker({
                placement: 'bottom',
                align: 'left',
                autoclose: true,
                'default': 'now'
            });
            break
        case "select":
            var $inpt = $('<select/>', this.settings.attrs);
            if (!this.isObjNonVal(this.settings.attrs, 'fieldSize'))
                $inpt.addClass("form-select-" + this.settings.attrs.fieldSize)
            var val = (obHasProp(this.settings.attrs, 'value')) ? this.settings.attrs.value : null;
            if (!this.isObjNonVal(this.settings.attrs, 'placeholder')) {
                var isSelected = ""
                if (!val)
                    isSelected = "selected"
                $inpt.append(` <option disabled ` + isSelected + ` value="" class="form-text">` + this.settings.attrs.placeholder + `</option>`);
            }
            if (('options' in this.settings))
                this.settings.options.forEach((item, index) => {
                    var isSelected = ""
                    if (val && val == item.value)
                        isSelected = "selected"
                    $inpt.append(` <option ` + isSelected + ` value="` + item.value + `">` + item.label + `</option>`);
                })
            $itmHtml.append(this.getLabel());
            var hasHelpText = (!this.isObjNonVal(this.settings, 'helpText'));
            if (this.hasInlineTitle()) {
                if (hasHelpText)
                    $itmHtml.append($('<div class="custom-control-inline col"></div>').append($('<div style=" width: 100% !important;"></div>').append($inpt)))
                else
                    $itmHtml.append($('<div class="custom-control-inline col"></div>').append($inpt))
            } else
                $itmHtml.append($inpt);
            if (hasHelpText) {
                var InputIdAttr = this.settings.attrs.data_id;
                $itmHtml.find(this.settings.selector).parent().closest('div').append(`<div class="help-feedback text-muted form-text" id="` + InputIdAttr + `-HelpText" >` + this.settings.helpText + `</div>`)
            }
            break
        case "upload":
            this.ItemObjects = new FileUploader($itmHtml, this.settings, this.isDesignTime);
            break
    }
    if ($itmHtml && $itmHtml.length > 0) {
        return $itmHtml;
    }
    return $('<div />')
}
ToolsBuilder.prototype.field = function() {
    return this.settings;
}
ToolsBuilder.prototype.getVal = function(obj, k, def) {
    return (!this.isObjNonVal(obj, k)) ? obj[k] : def;
}
ToolsBuilder.prototype.uniqueId = function() {
    return Math.random().toString(36).substring(3, 3) + Number(("" + (Date.now()) + (++toolsBuilderTtemsIds))).toString(36);
}
ToolsBuilder.prototype.designId = function(type) {
    return 'design_' + type + '_' + (++toolsBuilderTtemsIds).toString();
}
ToolsBuilder.prototype.defEventHandler = function(selector, event = 'change') {
    if (!selector)
        selector = this.settings.selector;
    return [{
        selector: selector,
        on: event,
        handler: (e, d) => {},
    }];
}
ToolsBuilder.prototype.isObjNonVal = function(obj, key) {
    return (!obHasProp(obj, key) || !obj[key] || obj[key] == null || obj[key].length == 0);
}
ToolsBuilder.prototype.isNullOrEmpty = function(val) {
    return (val == null || !val || val.length == 0);
}
