var _currentSpinnerId = 0;

function _scopedEventName(name, id) {
    return name + '.numberspin_' + id;
}

function _scopeEventNames(names, id) {
    return $.map(names, function (name) {
        return _scopedEventName(name, id);
    });
}
var numberSpinAttributeMap = ['min', 'max', 'value', 'step', 'id'],
    numberSpinDefaults = {
        attrs: {
            step: 1
        },
        initval: '',
        stepinterval: 100,
        stepintervaldelay: 500,
        replacementval: '',
        forcestepdivisibility: 'round', // none | floor | round | ceil
        decimals: 0,
        verticalbuttons: false,
        verticalupclass: 'fas fa-angle-up',
        verticaldownclass: 'fas fa-angle-down',
        mousewheel: true,
        buttondown_class: 'numberspin-decrease',
        buttonup_class: 'numberspin-increase',
        buttondown_txt: '<i class="fas fa-minus"></i>',
        buttonup_txt: '<i class="fas fa-plus"></i>'
    };

function TouchNumberSpin(numberInput, options) {
    var settings = {},
        originalinput = $(numberInput),
        container = $(numberInput.parent().closest('div')),
        elements,
        spincount = 0,
        spinning = false,
        spinnerId = 0,
        downSpinTimer,
        upSpinTimer,
        downDelayTimeout,
        upDelayTimeout;
    Object.defineProperty(this, 'upDelayTimeout', {
        get: function () {
            return upDelayTimeout;
        },
        set: function (value) {
            upDelayTimeout = value;
        }
    });
    Object.defineProperty(this, 'downDelayTimeout', {
        get: function () {
            return downDelayTimeout;
        },
        set: function (value) {
            downDelayTimeout = value;
        }
    });
    Object.defineProperty(this, 'upSpinTimer', {
        get: function () {
            return upSpinTimer;
        },
        set: function (value) {
            upSpinTimer = value;
        }
    });
    Object.defineProperty(this, 'downSpinTimer', {
        get: function () {
            return downSpinTimer;
        },
        set: function (value) {
            downSpinTimer = value;
        }
    });
    Object.defineProperty(this, 'spinnerId', {
        get: function () {
            return spinnerId;
        },
        set: function (value) {
            spinnerId = value;
        }
    });
    Object.defineProperty(this, 'spinning', {
        get: function () {
            return spinning;
        },
        set: function (value) {
            spinning = value;
        }
    });
    Object.defineProperty(this, 'spincount', {
        get: function () {
            return spincount;
        },
        set: function (value) {
            spincount = value;
        }
    });
    Object.defineProperty(this, 'elements', {
        get: function () {
            return elements;
        },
        set: function (value) {
            elements = value;
        }
    });
    Object.defineProperty(this, 'originalinput', {
        get: function () {
            return originalinput;
        },
        set: function (value) {
            originalinput = value;
        }
    });
    Object.defineProperty(this, 'settings', {
        get: function () {
            return settings;
        },
        set: function (value) {
            settings = value;
        }
    });
    Object.defineProperty(this, 'container', {
        get: function () {
            return container;
        },
        set: function (value) {
            container = value;
        }
    });
    options = (options || {});
    this.init(options);
}
TouchNumberSpin.prototype.destroy = function () {
    this.container.off(_scopeEventNames([
        'mouseup',
        'touchend',
        'touchcancel',
        'mousemove',
        'touchmove',
        'scroll',
        'scrollstart'
    ], this.spinnerId).join(' '));
    this.originalinput.data('alreadyinitialized', false);
};

TouchNumberSpin.prototype.init = function (options) {
    if (!this.originalinput.is('input')) {
        console.error('Must be an input.');
        return;
    }
    if (this.originalinput.data('alreadyinitialized')) {
        console.log('alreadyinitialized:', this)
        return;
    }
    this.originalinput.data('alreadyinitialized', true);

    if (!this.originalinput.data('spinnerid'))
        this.originalinput.data('spinnerid', (++_currentSpinnerId));
    this._initSettings(options);
   
    this._buildHtml();
    this._initElements();
    this._checkValue();

    this._bindEffectEvents();
    this._bindEvents();
    this._bindEventsInterface();
    this.elements.input.css('display', 'block');
    if (this.isInputDisabled()) {
        this.elements.up.addClass('is-disabled')
        this.elements.down.addClass('is-disabled')
    }
};
TouchNumberSpin.prototype._initSettings = function (options) {
    var opts_final = $.extend(true, {}, numberSpinDefaults);
    options = this._parseAttributes(options);
    this._setSettings(opts_final, options);
}
TouchNumberSpin.prototype._setSettings = function (defaults, newsettings) {
    this.settings = $.extend(true, {}, defaults, newsettings);
    this.spinnerId = this.settings.attrs['id'];
    if ('max' in this.settings.attrs)
        this.settings.attrs.max = Number(this.settings.attrs.max);
    if ('min' in this.settings.attrs)
        this.settings.attrs.min = Number(this.settings.attrs.min);
    this.settings.attrs.step = (!('step' in this.settings.attrs)) ? 1 : Number(this.settings.attrs.step);
}
TouchNumberSpin.prototype._parseAttributes = function (options) {
    if (!('attrs' in options))
        options.attrs = {};
    numberSpinAttributeMap.forEach(k => {
        var attrVal = this.originalinput.attr(k);
        if (attrVal && attrVal.length) {
            if (!(k in options.attrs))
                options.attrs[k] = attrVal;
        } else if (k in options.attrs)
            this.originalinput.attr(k, options.attrs[k])
    });
    if (!('id' in options.attrs))
        options.attrs['id'] = this.uniqueId();
    return options;
}
TouchNumberSpin.prototype.uniqueId = function () {
    return 'design_' + Math.random().toString(36).substring(3, 3) + Number(("" + (Date.now()))).toString(36) + "_" + this.originalinput.data('spinnerid');
}
TouchNumberSpin.prototype.changeSettings = function (newsettings) {
    this._setSettings(this.settings, newsettings);
    this._checkValue();
    var value = this.elements.input.val();
    if (value !== '') {
        value = Number(this.elements.input.val());
        this.elements.input.val(value.toFixed(this.settings.decimals));
    }
};
TouchNumberSpin.prototype._buildHtml = function () {
    var parentelement = $(this.originalinput.parent().closest('div'));
    var initval = this.originalinput.val()
    if (initval !== '') {
        initval = Number(initval).toFixed(this.settings.decimals);
    }
    this.originalinput.data('initvalue', initval).val(initval);
    var classList = ['text-center', 'numberspin'];
    classList.forEach(cls => {
        if (!this.originalinput.hasClass(cls))
            this.originalinput.addClass(cls);
    });
    if (parentelement.hasClass('input-group'))
        this._advanceInputGroup(parentelement);
    else
        this._buildInputGroup(parentelement);


}
TouchNumberSpin.prototype._advanceInputGroup = function (parentelement) {
    this.container = parentelement;
    this.container.addClass('bootstrap-numberspin');
    var prev = this.originalinput.prev(),
        next = this.originalinput.next();
    var downhtml,
        uphtml;
    if (prev.hasClass('input-group-btn')) {
        downhtml = '<div class="input-group-prepend"><span role="button" class="' + this.settings.buttondown_class + ' bootstrap-numberspin-down" >' + this.settings.buttondown_txt + '</span></div>';
        prev.append(downhtml);
    } else {
        downhtml = '<div class="input-group-prepend"><span role="button" class="' + this.settings.buttondown_class + ' bootstrap-numberspin-down" >' + this.settings.buttondown_txt + '</span></div>';
        $(downhtml).insertBefore(this.originalinput);
    }
    if (next.hasClass('input-group-btn')) {
        uphtml = '<div class="input-group-append"><button class="' + this.settings.buttonup_class + ' bootstrap-numberspin-up" >' + this.settings.buttonup_txt + '</button></div>';
        next.prepend(uphtml);
    } else {
        uphtml = '<div class="input-group-append"><button class="' + this.settings.buttonup_class + ' bootstrap-numberspin-up" >' + this.settings.buttonup_txt + '</button></div>';
        $(uphtml).insertAfter(this.originalinput);
    }
}
TouchNumberSpin.prototype._buildInputGroup = function (parentelement) {
    var html;
     var height = (this.settings.verticalbuttons) ? '36px' : '32px'
    this.container = $(`<div class="bootstrap-numberspin"></div>`);
    parentelement.append(this.container);
    this.container.css('height',height);
    var cl = this.originalinput.clone();
    this.originalinput.remove();
    this.container.append(cl);
    this.originalinput = $(this.container).find('#' + this.settings.attrs.id);
    if (this.settings.verticalbuttons) {
        html = '<span class="numberspin-btn-vertical"><span role="button" class="vertical-btn   bootstrap-numberspin-up" ><i class="' + this.settings.verticalupclass + '"></i></span><span role="button" class="vertical-btn  bootstrap-numberspin-down"><i class="' + this.settings.verticaldownclass + '"></i></span></span>'
        this.container.append(html);
        /*  if (this.originalinput.hasClass('input-sm')) {
             this.container.addClass('input-group-sm');
         } else if (this.originalinput.hasClass('input-lg')) {
             this.container.addClass('input-group-lg');
         } */
    } else {
        html = '<span role="button" class="bootstrap-numberspin-down ' + this.settings.buttondown_class + '" >' + this.settings.buttondown_txt + '</span>'
        $(html).insertBefore(this.originalinput);
        html = '<span role="button" class="bootstrap-numberspin-up ' + this.settings.buttonup_class + '" >' + this.settings.buttonup_txt + '</span>'
        this.container.append(html);
    }
}
TouchNumberSpin.prototype._initElements = function () {
    this.elements = {
        down: this.container.find('.bootstrap-numberspin-down'),
        up: this.container.find('.bootstrap-numberspin-up'),
        input: $(this.container).find('#' + this.settings.attrs.id)
    };

}
TouchNumberSpin.prototype.isInputDisabled = function () {
    return (this.elements.input.is('[disabled]') || this.elements.input.is('[readonly]'))
}
TouchNumberSpin.prototype.toggleContainerHover = function (target, isIn = false) {
    if (isIn && !target.hasClass('is-disabled') && !this.isInputDisabled())
        this.container.addClass('bootstrap-numberspin-hover');
    else if (!this.elements.input.is(':focus'))
        this.container.removeClass('bootstrap-numberspin-hover');
}
TouchNumberSpin.prototype._bindEffectEvents = function () {
    this.elements.input.on('focus blur', (ev) => {
        var isIn = (ev.type === 'focus');
        this.toggleContainerHover($(ev.target), isIn);
        if (!isIn)
            this._checkValue();
    })
    this.container.on('mouseenter mouseleave', '.bootstrap-numberspin-down,.bootstrap-numberspin-up', (ev) => {
        var isIn = (ev.type === 'mouseenter');
        this.toggleContainerHover($(ev.target), isIn);
    })
}

TouchNumberSpin.prototype._bindEvents = function () {
    this.elements.input.on('keydown', (ev) => {
        var code = ev.keyCode || ev.which;
        if (code === 38) {
            if (this.spinning !== 'up') {
                this.upOnce();
                this.startUpSpin();
            }
            ev.preventDefault();
        } else if (code === 40) {
            if (this.spinning !== 'down') {
                this.downOnce();
                this.startDownSpin();
            }
            ev.preventDefault();
        }
    });
    this.elements.input.on('keyup', (ev) => {
        var code = ev.keyCode || ev.which;
        if (code === 38) {
            this.stopSpin();
        } else if (code === 40) {
            this.stopSpin();
        }
    });

    this.elements.down.on('keydown', (ev) => {
        var code = ev.keyCode || ev.which;
        if (code === 32 || code === 13) {
            if (this.spinning !== 'down') {
                this.downOnce();
                this.startDownSpin();
            }
            ev.preventDefault();
        }
    });
    this.elements.down.on('keyup', (ev) => {
        var code = ev.keyCode || ev.which;
        if (code === 32 || code === 13) {
            this.stopSpin();
        }
    });
    this.elements.down.on('mousedown.numberspin', (ev) => {
        this.elements.down.off('touchstart.numberspin'); // android 4 workaround
        if (this.originalinput.is(':disabled')) {
            return;
        }
        this.downOnce();
        this.startDownSpin();
        ev.preventDefault();
        ev.stopPropagation();
    });
    this.elements.down.on('touchstart.numberspin', (ev) => {
        this.elements.down.off('mousedown.numberspin'); // android 4 workaround
        if (this.originalinput.is(':disabled')) {
            return;
        }
        this.downOnce();
        this.startDownSpin();
        ev.preventDefault();
        ev.stopPropagation();
    });
    this.elements.up.on('keydown', (ev) => {

        var code = ev.keyCode || ev.which;
        if (code === 32 || code === 13) {
            if (this.spinning !== 'up') {
                this.upOnce();
                this.startUpSpin();
            }
            ev.preventDefault();
        }
    });
    this.elements.up.on('keyup', (ev) => {
        var code = ev.keyCode || ev.which;
        if (code === 32 || code === 13) {
            this.stopSpin();
        }
    });
    this.elements.up.on('mousedown.numberspin', (ev) => {
        this.elements.up.off('touchstart.numberspin'); // android 4 workaround
        if (this.originalinput.is(':disabled')) {
            return;
        }
        this.upOnce();
        this.startUpSpin();
        ev.preventDefault();
        ev.stopPropagation();
    });
    this.elements.up.on('touchstart.numberspin', (ev) => {
        this.elements.up.off('mousedown.numberspin'); // android 4 workaround
        if (this.originalinput.is(':disabled')) {
            return;
        }
        this.upOnce();
        this.startUpSpin();
        ev.preventDefault();
        ev.stopPropagation();
    });
    this.elements.up.on('mouseout touchleave touchend touchcancel', (ev) => {
        if (!this.spinning) {
            return;
        }
        ev.stopPropagation();
        this.stopSpin();
    });
    this.elements.down.on('mouseout touchleave touchend touchcancel', (ev) => {
        if (!this.spinning) {
            return;
        }
        ev.stopPropagation();
        this.stopSpin();
    });
    this.elements.down.on('mousemove touchmove', (ev) => {
        if (!this.spinning)
            return;
        ev.stopPropagation();
        ev.preventDefault();
    });
    this.elements.up.on('mousemove touchmove', (ev) => {
        if (!this.spinning)
            return;
        ev.stopPropagation();
        ev.preventDefault();
    });
    this.container.on(_scopeEventNames(['mouseup', 'touchend', 'touchcancel'], this.spinnerId).join(' '), (ev) => {
        if (!this.spinning)
            return;
        ev.preventDefault();
        this.stopSpin();
    });
    this.container.on(_scopeEventNames(['mousemove', 'touchmove', 'scroll', 'scrollstart'], this.spinnerId).join(' '), (ev) => {
        if (!this.spinning)
            return;
        ev.preventDefault();
        this.stopSpin();
    });
    this.elements.input.on('mousewheel DOMMouseScroll', (ev) => {
        if (!this.settings.mousewheel || !this.elements.input.is(':focus')) {
            return;
        }
        var delta = ev.originalEvent.wheelDelta || -ev.originalEvent.deltaY || -ev.originalEvent.detail;
        ev.stopPropagation();
        ev.preventDefault();
        if (delta < 0) {
            this.downOnce();
        } else {
            this.upOnce();
        }
    });
}
TouchNumberSpin.prototype._bindEventsInterface = function () {
    this.elements.input.on('numberspin.uponce', () => {
        this.stopSpin();
        this.upOnce();
    });
    this.elements.input.on('numberspin.downonce', () => {
        this.stopSpin();
        this.downOnce();
    });
    this.elements.input.on('numberspin.startupspin', () => {
        this.startUpSpin();
    });
    this.elements.input.on('numberspin.startdownspin', () => {
        this.startDownSpin();
    });
    this.elements.input.on('numberspin.stopspin', () => {
        this.stopSpin();
    });
    this.elements.input.on('numberspin.updatesettings', (e, newsettings) => {

        this.changeSettings(newsettings);
    });
}
TouchNumberSpin.prototype._forcestepdivisibility = function (value) {
    switch (this.settings.forcestepdivisibility) {
        case 'round':
            return (Math.round(value / this.settings.attrs.step) * this.settings.attrs.step).toFixed(this.settings.decimals);
        case 'floor':
            return (Math.floor(value / this.settings.attrs.step) * this.settings.attrs.step).toFixed(this.settings.decimals);
        case 'ceil':
            return (Math.ceil(value / this.settings.attrs.step) * this.settings.attrs.step).toFixed(this.settings.decimals);
        default:
            return value;
    }
}
TouchNumberSpin.prototype._checkValue = function () {
    var val, parsedval, returnval;
    val = this.elements.input.val();
    if (val === '') {
        if (this.settings.replacementval !== '') {
            this.elements.input.val(this.settings.replacementval);
            this.elements.input.trigger('change');
        }
        return;
    }
    if (this.settings.decimals > 0 && val === '.') {
        return;
    }
    parsedval = parseFloat(val);
    if (isNaN(parsedval)) {
        if (this.settings.replacementval !== '') {
            parsedval = this.settings.replacementval;
        } else {
            parsedval = 0;
        }
    }
    returnval = parsedval;
    if (parsedval.toString() !== val) {
        returnval = parsedval;
    }
    if (this._checkMin(parsedval)) {
        returnval = this.settings.attrs.min;
    }
    if (this._checkMax(parsedval)) {
        returnval = this.settings.attrs.max;
    }
    returnval = this._forcestepdivisibility(returnval);
    if (Number(val).toString() !== returnval.toString()) {
        this.elements.input.val(returnval);
        this.elements.input.trigger('change');
    }
}
TouchNumberSpin.prototype._checkMin = function (val) {
    var b = (('min' in this.settings.attrs) && val < this.settings.attrs.min);
    if (b)
        this.elements.down.addClass('is-disabled')
    else
        this.elements.down.removeClass('is-disabled')
    return b;
}
TouchNumberSpin.prototype._checkMax = function (val) {
    var b = (('max' in this.settings.attrs) && val > this.settings.attrs.max);
    if (b)
        this.elements.up.addClass('is-disabled')
    else
        this.elements.up.removeClass('is-disabled')
    return b;
}
TouchNumberSpin.prototype._getSteps = function () {
    return this.settings.attrs.step;
}
TouchNumberSpin.prototype.upOnce = function () {
    if (this.isInputDisabled())
        return;

    this._checkValue();
    var value = Number(this.elements.input.val());
    if (isNaN(value)) {
        value = 0;
    }
    var initvalue = value,
        boostedstep = this._getSteps();
    value = value + boostedstep;
    if (this._checkMax(value)) {
        value = this.settings.attrs.max;
        this.elements.input.trigger('numberspin.on.max');
        this.stopSpin();
    }
    this.elements.input.val(Number(value).toFixed(this.settings.decimals));
    if (initvalue !== value) {
        this.elements.input.trigger('change');
    }

};
TouchNumberSpin.prototype.getSettingsVal = function (obj, k, def) {
    return (!this.isObjNonVal(obj, k)) ? obj[k] : def;
};
TouchNumberSpin.prototype.isObjNonVal = function (obj, key) {
    return (!(key in obj) || !obj[key] || obj[key] == null || obj[key].length == 0);
};
TouchNumberSpin.prototype.downOnce = function () {
    if (this.isInputDisabled())
        return;
    this._checkValue();
    var value = Number(this.elements.input.val());
    if (isNaN(value)) {
        value = 0;
    }
    var initvalue = value,
        boostedstep = this._getSteps();
    value = value - boostedstep;
    if (this._checkMin(value)) {
        value = this.settings.attrs.min;
        this.elements.input.trigger('numberspin.on.min');
        this.stopSpin();
    }
    this.elements.input.val(value.toFixed(this.settings.decimals));
    if (initvalue !== value) {
        this.elements.input.trigger('change');
    }
}
TouchNumberSpin.prototype.startDownSpin = function () {
    this.stopSpin();
    if (this.isInputDisabled())
        return;
    this.spincount = 0;
    this.spinning = 'down';
    this.elements.input.trigger('numberspin.on.startspin');
    this.elements.input.trigger('numberspin.on.startdownspin');
    this.downDelayTimeout = setTimeout(() => {
        this.downSpinTimer = setInterval(() => {
            this.spincount++;
            this.downOnce();
        }, this.getSettingsVal(this.settings, 'stepinterval', 100));
    }, this.getSettingsVal(this.settings, 'stepintervaldelay', 500));
}
TouchNumberSpin.prototype.startUpSpin = function () {
    this.stopSpin();
    if (this.isInputDisabled())
        return;
    this.spincount = 0;
    this.spinning = 'up';
    this.elements.input.trigger('numberspin.on.startspin');
    this.elements.input.trigger('numberspin.on.startupspin');
    this.upDelayTimeout = setTimeout( ()=> {
        this.upSpinTimer = setInterval(()=>  {
            this.spincount++;
            this.upOnce();
        }, this.getSettingsVal(this.settings, 'stepinterval', 100));
    }, this.getSettingsVal(this.settings, 'stepintervaldelay', 500));
}
TouchNumberSpin.prototype.stopSpin = function () {
    clearTimeout(this.downDelayTimeout);
    clearTimeout(this.upDelayTimeout);
    clearInterval(this.downSpinTimer);
    clearInterval(this.upSpinTimer);
    switch (this.spinning) {
        case 'up':
            this.elements.input.trigger('numberspin.on.stopupspin');
            this.elements.input.trigger('numberspin.on.stopspin');
            break;
        case 'down':
            this.elements.input.trigger('numberspin.on.stopdownspin');
            this.elements.input.trigger('numberspin.on.stopspin');
            break;
    }
    this.spincount = 0;
    this.spinning = false;
};
