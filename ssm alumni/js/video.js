/**
 * @license
 * Video.js 5.19.2 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojs = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _button = _dereq_(2);

var _button2 = _interopRequireDefault(_button);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file big-play-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The initial play button that shows before the video has played. The hiding of the
 * `BigPlayButton` get done via CSS and `Player` states.
 *
 * @extends Button
 */
var BigPlayButton = function (_Button) {
  _inherits(BigPlayButton, _Button);

  function BigPlayButton() {
    _classCallCheck(this, BigPlayButton);

    return _possibleConstructorReturn(this, _Button.apply(this, arguments));
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object. Always returns 'vjs-big-play-button'.
   */
  BigPlayButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-big-play-button';
  };

  /**
   * This gets called when a `BigPlayButton` "clicked". See {@link ClickableComponent}
   * for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} event
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  BigPlayButton.prototype.handleClick = function handleClick(event) {
    this.player_.play();

    var cb = this.player_.getChild('controlBar');
    var playToggle = cb && cb.getChild('playToggle');

    if (!playToggle) {
      this.player_.focus();
      return;
    }

    this.setTimeout(function () {
      playToggle.focus();
    }, 1);
  };

  return BigPlayButton;
}(_button2['default']);

/**
 * The text that should display over the `BigPlayButton`s controls. Added to for localization.
 *
 * @type {string}
 * @private
 */


BigPlayButton.prototype.controlText_ = 'Play Video';

_component2['default'].registerComponent('BigPlayButton', BigPlayButton);
exports['default'] = BigPlayButton;

},{"2":2,"5":5}],2:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _clickableComponent = _dereq_(3);

var _clickableComponent2 = _interopRequireDefault(_clickableComponent);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _log = _dereq_(86);

var _log2 = _interopRequireDefault(_log);

var _obj = _dereq_(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Base class for all buttons.
 *
 * @extends ClickableComponent
 */
var Button = function (_ClickableComponent) {
  _inherits(Button, _ClickableComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _ClickableComponent.apply(this, arguments));
  }

  /**
   * Create the `Button`s DOM element.
   *
   * @param {string} [tag=button]
   *        Element's node type. e.g. 'button'
   *
   * @param {Object} [props={}]
   *        An object of properties that should be set on the element.
   *
   * @param {Object} [attributes={}]
   *        An object of attributes that should be set on the element.
   *
   * @return {Element}
   *         The element that gets created.
   */
  Button.prototype.createEl = function createEl() {
    var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'button';
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    props = (0, _obj.assign)({
      className: this.buildCSSClass()
    }, props);

    if (tag !== 'button') {
      _log2['default'].warn('Creating a Button with an HTML element of ' + tag + ' is deprecated; use ClickableComponent instead.');

      // Add properties for clickable element which is not a native HTML button
      props = (0, _obj.assign)({
        tabIndex: 0
      }, props);

      // Add ARIA attributes for clickable element which is not a native HTML button
      attributes = (0, _obj.assign)({
        role: 'button'
      }, attributes);
    }

    // Add attributes for button element
    attributes = (0, _obj.assign)({

      // Necessary since the default button type is "submit"
      'type': 'button',

      // let the screen reader user know that the text of the button may change
      'aria-live': 'polite'
    }, attributes);

    var el = _component2['default'].prototype.createEl.call(this, tag, props, attributes);

    this.createControlTextEl(el);

    return el;
  };

  /**
   * Add a child `Component` inside of this `Button`.
   *
   * @param {string|Component} child
   *        The name or instance of a child to add.
   *
   * @param {Object} [options={}]
   *        The key/value store of options that will get passed to children of
   *        the child.
   *
   * @return {Component}
   *         The `Component` that gets added as a child. When using a string the
   *         `Component` will get created by this process.
   *
   * @deprecated since version 5
   */


  Button.prototype.addChild = function addChild(child) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var className = this.constructor.name;

    _log2['default'].warn('Adding an actionable (user controllable) child to a Button (' + className + ') is not supported; use a ClickableComponent instead.');

    // Avoid the error message generated by ClickableComponent's addChild method
    return _component2['default'].prototype.addChild.call(this, child, options);
  };

  /**
   * Enable the `Button` element so that it can be activated or clicked. Use this with
   * {@link Button#disable}.
   */


  Button.prototype.enable = function enable() {
    _ClickableComponent.prototype.enable.call(this);
    this.el_.removeAttribute('disabled');
  };

  /**
   * Enable the `Button` element so that it cannot be activated or clicked. Use this with
   * {@link Button#enable}.
   */


  Button.prototype.disable = function disable() {
    _ClickableComponent.prototype.disable.call(this);
    this.el_.setAttribute('disabled', 'disabled');
  };

  /**
   * This gets called when a `Button` has focus and `keydown` is triggered via a key
   * press.
   *
   * @param {EventTarget~Event} event
   *        The event that caused this function to get called.
   *
   * @listens keydown
   */


  Button.prototype.handleKeyPress = function handleKeyPress(event) {

    // Ignore Space (32) or Enter (13) key operation, which is handled by the browser for a button.
    if (event.which === 32 || event.which === 13) {
      return;
    }

    // Pass keypress handling up for unsupported keys
    _ClickableComponent.prototype.handleKeyPress.call(this, event);
  };

  return Button;
}(_clickableComponent2['default']);

_component2['default'].registerComponent('Button', Button);
exports['default'] = Button;

},{"3":3,"5":5,"86":86,"88":88}],3:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

var _events = _dereq_(82);

var Events = _interopRequireWildcard(_events);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _log = _dereq_(86);

var _log2 = _interopRequireDefault(_log);

var _document = _dereq_(94);

var _document2 = _interopRequireDefault(_document);

var _obj = _dereq_(88);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Clickable Component which is clickable or keyboard actionable,
 * but is not a native HTML button.
 *
 * @extends Component
 */
var ClickableComponent = function (_Component) {
  _inherits(ClickableComponent, _Component);

  /**
   * Creates an instance of this class.
   *
   * @param  {Player} player
   *         The `Player` that this class should be attached to.
   *
   * @param  {Object} [options]
   *         The key/value store of player options.
   */
  function ClickableComponent(player, options) {
    _classCallCheck(this, ClickableComponent);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    _this.emitTapEvents();

    _this.enable();
    return _this;
  }

  /**
   * Create the `Component`s DOM element.
   *
   * @param {string} [tag=div]
   *        The element's node type.
   *
   * @param {Object} [props={}]
   *        An object of properties that should be set on the element.
   *
   * @param {Object} [attributes={}]
   *        An object of attributes that should be set on the element.
   *
   * @return {Element}
   *         The element that gets created.
   */


  ClickableComponent.prototype.createEl = function createEl() {
    var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    props = (0, _obj.assign)({
      className: this.buildCSSClass(),
      tabIndex: 0
    }, props);

    if (tag === 'button') {
      _log2['default'].error('Creating a ClickableComponent with an HTML element of ' + tag + ' is not supported; use a Button instead.');
    }

    // Add ARIA attributes for clickable element which is not a native HTML button
    attributes = (0, _obj.assign)({
      'role': 'button',

      // let the screen reader user know that the text of the element may change
      'aria-live': 'polite'
    }, attributes);

    this.tabIndex_ = props.tabIndex;

    var el = _Component.prototype.createEl.call(this, tag, props, attributes);

    this.createControlTextEl(el);

    return el;
  };

  /**
   * Create a control text element on this `Component`
   *
   * @param {Element} [el]
   *        Parent element for the control text.
   *
   * @return {Element}
   *         The control text element that gets created.
   */


  ClickableComponent.prototype.createControlTextEl = function createControlTextEl(el) {
    this.controlTextEl_ = Dom.createEl('span', {
      className: 'vjs-control-text'
    });

    if (el) {
      el.appendChild(this.controlTextEl_);
    }

    this.controlText(this.controlText_, el);

    return this.controlTextEl_;
  };

  /**
   * Get or set the localize text to use for the controls on the `Component`.
   *
   * @param {string} [text]
   *        Control text for element.
   *
   * @param {Element} [el=this.el()]
   *        Element to set the title on.
   *
   * @return {string|ClickableComponent}
   *         - The control text when getting
   *         - Returns itself when setting; method can be chained.
   */


  ClickableComponent.prototype.controlText = function controlText(text) {
    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.el();

    if (!text) {
      return this.controlText_ || 'Need Text';
    }

    var localizedText = this.localize(text);

    this.controlText_ = text;
    this.controlTextEl_.innerHTML = localizedText;

    if (!this.nonIconControl) {
      // Set title attribute if only an icon is shown
      el.setAttribute('title', localizedText);
    }

    return this;
  };

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  ClickableComponent.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-control vjs-button ' + _Component.prototype.buildCSSClass.call(this);
  };

  /**
   * Enable this `Component`s element.
   *
   * @return {ClickableComponent}
   *         Returns itself; method can be chained.
   */


  ClickableComponent.prototype.enable = function enable() {
    this.removeClass('vjs-disabled');
    this.el_.setAttribute('aria-disabled', 'false');
    if (typeof this.tabIndex_ !== 'undefined') {
      this.el_.setAttribute('tabIndex', this.tabIndex_);
    }
    this.on('tap', this.handleClick);
    this.on('click', this.handleClick);
    this.on('focus', this.handleFocus);
    this.on('blur', this.handleBlur);
    return this;
  };

  /**
   * Disable this `Component`s element.
   *
   * @return {ClickableComponent}
   *         Returns itself; method can be chained.
   */


  ClickableComponent.prototype.disable = function disable() {
    this.addClass('vjs-disabled');
    this.el_.setAttribute('aria-disabled', 'true');
    if (typeof this.tabIndex_ !== 'undefined') {
      this.el_.removeAttribute('tabIndex');
    }
    this.off('tap', this.handleClick);
    this.off('click', this.handleClick);
    this.off('focus', this.handleFocus);
    this.off('blur', this.handleBlur);
    return this;
  };

  /**
   * This gets called when a `ClickableComponent` gets:
   * - Clicked (via the `click` event, listening starts in the constructor)
   * - Tapped (via the `tap` event, listening starts in the constructor)
   * - The following things happen in order:
   *   1. {@link ClickableComponent#handleFocus} is called via a `focus` event on the
   *      `ClickableComponent`.
   *   2. {@link ClickableComponent#handleFocus} adds a listener for `keydown` on using
   *      {@link ClickableComponent#handleKeyPress}.
   *   3. `ClickableComponent` has not had a `blur` event (`blur` means that focus was lost). The user presses
   *      the space or enter key.
   *   4. {@link ClickableComponent#handleKeyPress} calls this function with the `keydown`
   *      event as a parameter.
   *
   * @param {EventTarget~Event} event
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   * @abstract
   */


  ClickableComponent.prototype.handleClick = function handleClick(event) {};

  /**
   * This gets called when a `ClickableComponent` gains focus via a `focus` event.
   * Turns on listening for `keydown` events. When they happen it
   * calls `this.handleKeyPress`.
   *
   * @param {EventTarget~Event} event
   *        The `focus` event that caused this function to be called.
   *
   * @listens focus
   */


  ClickableComponent.prototype.handleFocus = function handleFocus(event) {
    Events.on(_document2['default'], 'keydown', Fn.bind(this, this.handleKeyPress));
  };

  /**
   * Called when this ClickableComponent has focus and a key gets pressed down. By
   * default it will call `this.handleClick` when the key is space or enter.
   *
   * @param {EventTarget~Event} event
   *        The `keydown` event that caused this function to be called.
   *
   * @listens keydown
   */


  ClickableComponent.prototype.handleKeyPress = function handleKeyPress(event) {

    // Support Space (32) or Enter (13) key operation to fire a click event
    if (event.which === 32 || event.which === 13) {
      event.preventDefault();
      this.handleClick(event);
    } else if (_Component.prototype.handleKeyPress) {

      // Pass keypress handling up for unsupported keys
      _Component.prototype.handleKeyPress.call(this, event);
    }
  };

  /**
   * Called when a `ClickableComponent` loses focus. Turns off the listener for
   * `keydown` events. Which Stops `this.handleKeyPress` from getting called.
   *
   * @param {EventTarget~Event} event
   *        The `blur` event that caused this function to be called.
   *
   * @listens blur
   */


  ClickableComponent.prototype.handleBlur = function handleBlur(event) {
    Events.off(_document2['default'], 'keydown', Fn.bind(this, this.handleKeyPress));
  };

  return ClickableComponent;
}(_component2['default']);

_component2['default'].registerComponent('ClickableComponent', ClickableComponent);
exports['default'] = ClickableComponent;

},{"5":5,"81":81,"82":82,"83":83,"86":86,"88":88,"94":94}],4:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _button = _dereq_(2);

var _button2 = _interopRequireDefault(_button);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file close-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The `CloseButton` is a `{@link Button}` that fires a `close` event when
 * it gets clicked.
 *
 * @extends Button
 */
var CloseButton = function (_Button) {
  _inherits(CloseButton, _Button);

  /**
   * Creates an instance of the this class.
   *
   * @param  {Player} player
   *         The `Player` that this class should be attached to.
   *
   * @param  {Object} [options]
   *         The key/value store of player options.
   */
  function CloseButton(player, options) {
    _classCallCheck(this, CloseButton);

    var _this = _possibleConstructorReturn(this, _Button.call(this, player, options));

    _this.controlText(options && options.controlText || _this.localize('Close'));
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  CloseButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-close-button ' + _Button.prototype.buildCSSClass.call(this);
  };

  /**
   * This gets called when a `CloseButton` gets clicked. See
   * {@link ClickableComponent#handleClick} for more information on when this will be
   * triggered
   *
   * @param {EventTarget~Event} event
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   * @fires CloseButton#close
   */


  CloseButton.prototype.handleClick = function handleClick(event) {

    /**
     * Triggered when the a `CloseButton` is clicked.
     *
     * @event CloseButton#close
     * @type {EventTarget~Event}
     *
     * @property {boolean} [bubbles=false]
     *           set to false so that the close event does not
     *           bubble up to parents if there is no listener
     */
    this.trigger({ type: 'close', bubbles: false });
  };

  return CloseButton;
}(_button2['default']);

_component2['default'].registerComponent('CloseButton', CloseButton);
exports['default'] = CloseButton;

},{"2":2,"5":5}],5:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _window = _dereq_(95);

var _window2 = _interopRequireDefault(_window);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _guid = _dereq_(85);

var Guid = _interopRequireWildcard(_guid);

var _events = _dereq_(82);

var Events = _interopRequireWildcard(_events);

var _log = _dereq_(86);

var _log2 = _interopRequireDefault(_log);

var _toTitleCase = _dereq_(91);

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

var _mergeOptions = _dereq_(87);

var _mergeOptions2 = _interopRequireDefault(_mergeOptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Player Component - Base class for all UI objects
                                                                                                                                                           *
                                                                                                                                                           * @file component.js
                                                                                                                                                           */


/**
 * Base class for all UI Components.
 * Components are UI objects which represent both a javascript object and an element
 * in the DOM. They can be children of other components, and can have
 * children themselves.
 *
 * Components can also use methods from {@link EventTarget}
 */
var Component = function () {

  /**
   * A callback that is called when a component is ready. Does not have any
   * paramters and any callback value will be ignored.
   *
   * @callback Component~ReadyCallback
   * @this Component
   */

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   #
   * @param {Object[]} [options.children]
   *        An array of children objects to intialize this component with. Children objects have
   *        a name property that will be used if more than one component of the same type needs to be
   *        added.
   *
   * @param {Component~ReadyCallback} [ready]
   *        Function that gets called when the `Component` is ready.
   */
  function Component(player, options, ready) {
    _classCallCheck(this, Component);

    // The component might be the player itself and we can't pass `this` to super
    if (!player && this.play) {
      this.player_ = player = this; // eslint-disable-line
    } else {
      this.player_ = player;
    }

    // Make a copy of prototype.options_ to protect against overriding defaults
    this.options_ = (0, _mergeOptions2['default'])({}, this.options_);

    // Updated options with supplied options
    options = this.options_ = (0, _mergeOptions2['default'])(this.options_, options);

    // Get ID from options or options element if one is supplied
    this.id_ = options.id || options.el && options.el.id;

    // If there was no ID from the options, generate one
    if (!this.id_) {
      // Don't require the player ID function in the case of mock players
      var id = player && player.id && player.id() || 'no_player';

      this.id_ = id + '_component_' + Guid.newGUID();
    }

    this.name_ = options.name || null;

    // Create element if one wasn't provided in options
    if (options.el) {
      this.el_ = options.el;
    } else if (options.createEl !== false) {
      this.el_ = this.createEl();
    }

    this.children_ = [];
    this.childIndex_ = {};
    this.childNameIndex_ = {};

    // Add any child components in options
    if (options.initChildren !== false) {
      this.initChildren();
    }

    this.ready(ready);
    // Don't want to trigger ready here or it will before init is actually
    // finished for all children that run this constructor

    if (options.reportTouchActivity !== false) {
      this.enableTouchActivity();
    }
  }

  /**
   * Dispose of the `Component` and all child components.
   *
   * @fires Component#dispose
   */


  Component.prototype.dispose = function dispose() {

    /**
     * Triggered when a `Component` is disposed.
     *
     * @event Component#dispose
     * @type {EventTarget~Event}
     *
     * @property {boolean} [bubbles=false]
     *           set to false so that the close event does not
     *           bubble up
     */
    this.trigger({ type: 'dispose', bubbles: false });

    // Dispose all children.
    if (this.children_) {
      for (var i = this.children_.length - 1; i >= 0; i--) {
        if (this.children_[i].dispose) {
          this.children_[i].dispose();
        }
      }
    }

    // Delete child references
    this.children_ = null;
    this.childIndex_ = null;
    this.childNameIndex_ = null;

    // Remove all event listeners.
    this.off();

    // Remove element from DOM
    if (this.el_.parentNode) {
      this.el_.parentNode.removeChild(this.el_);
    }

    Dom.removeElData(this.el_);
    this.el_ = null;
  };

  /**
   * Return the {@link Player} that the `Component` has attached to.
   *
   * @return {Player}
   *         The player that this `Component` has attached to.
   */


  Component.prototype.player = function player() {
    return this.player_;
  };

  /**
   * Deep merge of options objects with new options.
   * > Note: When both `obj` and `options` contain properties whose values are objects.
   *         The two properties get merged using {@link module:mergeOptions}
   *
   * @param {Object} obj
   *        The object that contains new options.
   *
   * @return {Object}
   *         A new object of `this.options_` and `obj` merged together.
   *
   * @deprecated since version 5
   */


  Component.prototype.options = function options(obj) {
    _log2['default'].warn('this.options() has been deprecated and will be moved to the constructor in 6.0');

    if (!obj) {
      return this.options_;
    }

    this.options_ = (0, _mergeOptions2['default'])(this.options_, obj);
    return this.options_;
  };

  /**
   * Get the `Component`s DOM element
   *
   * @return {Element}
   *         The DOM element for this `Component`.
   */


  Component.prototype.el = function el() {
    return this.el_;
  };

  /**
   * Create the `Component`s DOM element.
   *
   * @param {string} [tagName]
   *        Element's DOM node type. e.g. 'div'
   *
   * @param {Object} [properties]
   *        An object of properties that should be set.
   *
   * @param {Object} [attributes]
   *        An object of attributes that should be set.
   *
   * @return {Element}
   *         The element that gets created.
   */


  Component.prototype.createEl = function createEl(tagName, properties, attributes) {
    return Dom.createEl(tagName, properties, attributes);
  };

  /**
   * Localize a string given the string in english.
   *
   * @param {string} string
   *        The string to localize.
   *
   * @return {string}
   *         The localized string or if no localization exists the english string.
   */


  Component.prototype.localize = function localize(string) {
    var code = this.player_.language && this.player_.language();
    var languages = this.player_.languages && this.player_.languages();

    if (!code || !languages) {
      return string;
    }

    var language = languages[code];

    if (language && language[string]) {
      return language[string];
    }

    var primaryCode = code.split('-')[0];
    var primaryLang = languages[primaryCode];

    if (primaryLang && primaryLang[string]) {
      return primaryLang[string];
    }

    return string;
  };

  /**
   * Return the `Component`s DOM element. This is where children get inserted.
   * This will usually be the the same as the element returned in {@link Component#el}.
   *
   * @return {Element}
   *         The content element for this `Component`.
   */


  Component.prototype.contentEl = function contentEl() {
    return this.contentEl_ || this.el_;
  };

  /**
   * Get this `Component`s ID
   *
   * @return {string}
   *         The id of this `Component`
   */


  Component.prototype.id = function id() {
    return this.id_;
  };

  /**
   * Get the `Component`s name. The name gets used to reference the `Component`
   * and is set during registration.
   *
   * @return {string}
   *         The name of this `Component`.
   */


  Component.prototype.name = function name() {
    return this.name_;
  };

  /**
   * Get an array of all child components
   *
   * @return {Array}
   *         The children
   */


  Component.prototype.children = function children() {
    return this.children_;
  };

  /**
   * Returns the child `Component` with the given `id`.
   *
   * @param {string} id
   *        The id of the child `Component` to get.
   *
   * @return {Component|undefined}
   *         The child `Component` with the given `id` or undefined.
   */


  Component.prototype.getChildById = function getChildById(id) {
    return this.childIndex_[id];
  };

  /**
   * Returns the child `Component` with the given `name`.
   *
   * @param {string} name
   *        The name of the child `Component` to get.
   *
   * @return {Component|undefined}
   *         The child `Component` with the given `name` or undefined.
   */


  Component.prototype.getChild = function getChild(name) {
    if (!name) {
      return;
    }

    name = (0, _toTitleCase2['default'])(name);

    return this.childNameIndex_[name];
  };

  /**
   * Add a child `Component` inside the current `Component`.
   *
   *
   * @param {string|Component} child
   *        The name or instance of a child to add.
   *
   * @param {Object} [options={}]
   *        The key/value store of options that will get passed to children of
   *        the child.
   *
   * @param {number} [index=this.children_.length]
   *        The index to attempt to add a child into.
   *
   * @return {Component}
   *         The `Component` that gets added as a child. When using a string the
   *         `Component` will get created by this process.
   */


  Component.prototype.addChild = function addChild(child) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.children_.length;

    var component = void 0;
    var componentName = void 0;

    // If child is a string, create component with options
    if (typeof child === 'string') {
      componentName = (0, _toTitleCase2['default'])(child);

      // Options can also be specified as a boolean,
      // so convert to an empty object if false.
      if (!options) {
        options = {};
      }

      // Same as above, but true is deprecated so show a warning.
      if (options === true) {
        _log2['default'].warn('Initializing a child component with `true` is deprecated.' + 'Children should be defined in an array when possible, ' + 'but if necessary use an object instead of `true`.');
        options = {};
      }

      var componentClassName = options.componentClass || componentName;

      // Set name through options
      options.name = componentName;

      // Create a new object & element for this controls set
      // If there's no .player_, this is a player
      var ComponentClass = Component.getComponent(componentClassName);

      if (!ComponentClass) {
        throw new Error('Component ' + componentClassName + ' does not exist');
      }

      // data stored directly on the videojs object may be
      // misidentified as a component to retain
      // backwards-compatibility with 4.x. check to make sure the
      // component class can be instantiated.
      if (typeof ComponentClass !== 'function') {
        return null;
      }

      component = new ComponentClass(this.player_ || this, options);

      // child is a component instance
    } else {
      component = child;
    }

    this.children_.splice(index, 0, component);

    if (typeof component.id === 'function') {
      this.childIndex_[component.id()] = component;
    }

    // If a name wasn't used to create the component, check if we can use the
    // name function of the component
    componentName = componentName || component.name && (0, _toTitleCase2['default'])(component.name());

    if (componentName) {
      this.childNameIndex_[componentName] = component;
    }

    // Add the UI object's element to the container div (box)
    // Having an element is not required
    if (typeof component.el === 'function' && component.el()) {
      var childNodes = this.contentEl().children;
      var refNode = childNodes[index] || null;

      this.contentEl().insertBefore(component.el(), refNode);
    }

    // Return so it can stored on parent object if desired.
    return component;
  };

  /**
   * Remove a child `Component` from this `Component`s list of children. Also removes
   * the child `Component`s element from this `Component`s element.
   *
   * @param {Component} component
   *        The child `Component` to remove.
   */


  Component.prototype.removeChild = function removeChild(component) {
    if (typeof component === 'string') {
      component = this.getChild(component);
    }

    if (!component || !this.children_) {
      return;
    }

    var childFound = false;

    for (var i = this.children_.length - 1; i >= 0; i--) {
      if (this.children_[i] === component) {
        childFound = true;
        this.children_.splice(i, 1);
        break;
      }
    }

    if (!childFound) {
      return;
    }

    this.childIndex_[component.id()] = null;
    this.childNameIndex_[component.name()] = null;

    var compEl = component.el();

    if (compEl && compEl.parentNode === this.contentEl()) {
      this.contentEl().removeChild(component.el());
    }
  };

  /**
   * Add and initialize default child `Component`s based upon options.
   */


  Component.prototype.initChildren = function initChildren() {
    var _this = this;

    var children = this.options_.children;

    if (children) {
      // `this` is `parent`
      var parentOptions = this.options_;

      var handleAdd = function handleAdd(child) {
        var name = child.name;
        var opts = child.opts;

        // Allow options for children to be set at the parent options
        // e.g. videojs(id, { controlBar: false });
        // instead of videojs(id, { children: { controlBar: false });
        if (parentOptions[name] !== undefined) {
          opts = parentOptions[name];
        }

        // Allow for disabling default components
        // e.g. options['children']['posterImage'] = false
        if (opts === false) {
          return;
        }

        // Allow options to be passed as a simple boolean if no configuration
        // is necessary.
        if (opts === true) {
          opts = {};
        }

        // We also want to pass the original player options
        // to each component as well so they don't need to
        // reach back into the player for options later.
        opts.playerOptions = _this.options_.playerOptions;

        // Create and add the child component.
        // Add a direct reference to the child by name on the parent instance.
        // If two of the same component are used, different names should be supplied
        // for each
        var newChild = _this.addChild(name, opts);

        if (newChild) {
          _this[name] = newChild;
        }
      };

      // Allow for an array of children details to passed in the options
      var workingChildren = void 0;
      var Tech = Component.getComponent('Tech');

      if (Array.isArray(children)) {
        workingChildren = children;
      } else {
        workingChildren = Object.keys(children);
      }

      workingChildren
      // children that are in this.options_ but also in workingChildren  would
      // give us extra children we do not want. So, we want to filter them out.
      .concat(Object.keys(this.options_).filter(function (child) {
        return !workingChildren.some(function (wchild) {
          if (typeof wchild === 'string') {
            return child === wchild;
          }
          return child === wchild.name;
        });
      })).map(function (child) {
        var name = void 0;
        var opts = void 0;

        if (typeof child === 'string') {
          name = child;
          opts = children[name] || _this.options_[name] || {};
        } else {
          name = child.name;
          opts = child;
        }

        return { name: name, opts: opts };
      }).filter(function (child) {
        // we have to make sure that child.name isn't in the techOrder since
        // techs are registerd as Components but can't aren't compatible
        // See https://github.com/videojs/video.js/issues/2772
        var c = Component.getComponent(child.opts.componentClass || (0, _toTitleCase2['default'])(child.name));

        return c && !Tech.isTech(c);
      }).forEach(handleAdd);
    }
  };

  /**
   * Builds the default DOM class name. Should be overriden by sub-components.
   *
   * @return {string}
   *         The DOM class name for this object.
   *
   * @abstract
   */


  Component.prototype.buildCSSClass = function buildCSSClass() {
    // Child classes can include a function that does:
    // return 'CLASS NAME' + this._super();
    return '';
  };

  /**
   * Add an `event listener` to this `Component`s element.
   *
   * The benefit of using this over the following:
   * - `VjsEvents.on(otherElement, 'eventName', myFunc)`
   * - `otherComponent.on('eventName', myFunc)`
   *
   * 1. Is that the listeners will get cleaned up when either component gets disposed.
   * 1. It will also bind `myComponent` as the context of `myFunc`.
   * > NOTE: If you remove the element from the DOM that has used `on` you need to
   *         clean up references using: `myComponent.trigger(el, 'dispose')`
   *         This will also allow the browser to garbage collect it. In special
   *         cases such as with `window` and `document`, which are both permanent,
   *         this is not necessary.
   *
   * @param {string|Component|string[]} [first]
   *        The event name, and array of event names, or another `Component`.
   *
   * @param {EventTarget~EventListener|string|string[]} [second]
   *        The listener function, an event name, or an Array of events names.
   *
   * @param {EventTarget~EventListener} [third]
   *        The event handler if `first` is a `Component` and `second` is an event name
   *        or an Array of event names.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   *
   * @listens Component#dispose
   */


  Component.prototype.on = function on(first, second, third) {
    var _this2 = this;

    if (typeof first === 'string' || Array.isArray(first)) {
      Events.on(this.el_, first, Fn.bind(this, second));

      // Targeting another component or element
    } else {
      var target = first;
      var type = second;
      var fn = Fn.bind(this, third);

      // When this component is disposed, remove the listener from the other component
      var removeOnDispose = function removeOnDispose() {
        return _this2.off(target, type, fn);
      };

      // Use the same function ID so we can remove it later it using the ID
      // of the original listener
      removeOnDispose.guid = fn.guid;
      this.on('dispose', removeOnDispose);

      // If the other component is disposed first we need to clean the reference
      // to the other component in this component's removeOnDispose listener
      // Otherwise we create a memory leak.
      var cleanRemover = function cleanRemover() {
        return _this2.off('dispose', removeOnDispose);
      };

      // Add the same function ID so we can easily remove it later
      cleanRemover.guid = fn.guid;

      // Check if this is a DOM node
      if (first.nodeName) {
        // Add the listener to the other element
        Events.on(target, type, fn);
        Events.on(target, 'dispose', cleanRemover);

        // Should be a component
        // Not using `instanceof Component` because it makes mock players difficult
      } else if (typeof first.on === 'function') {
        // Add the listener to the other component
        target.on(type, fn);
        target.on('dispose', cleanRemover);
      }
    }

    return this;
  };

  /**
   * Remove an event listener from this `Component`s element. If the second argument is
   * exluded all listeners for the type passed in as the first argument will be removed.
   *
   * @param {string|Component|string[]} [first]
   *        The event name, and array of event names, or another `Component`.
   *
   * @param {EventTarget~EventListener|string|string[]} [second]
   *        The listener function, an event name, or an Array of events names.
   *
   * @param {EventTarget~EventListener} [third]
   *        The event handler if `first` is a `Component` and `second` is an event name
   *        or an Array of event names.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   */


  Component.prototype.off = function off(first, second, third) {
    if (!first || typeof first === 'string' || Array.isArray(first)) {
      Events.off(this.el_, first, second);
    } else {
      var target = first;
      var type = second;
      // Ensure there's at least a guid, even if the function hasn't been used
      var fn = Fn.bind(this, third);

      // Remove the dispose listener on this component,
      // which was given the same guid as the event listener
      this.off('dispose', fn);

      if (first.nodeName) {
        // Remove the listener
        Events.off(target, type, fn);
        // Remove the listener for cleaning the dispose listener
        Events.off(target, 'dispose', fn);
      } else {
        target.off(type, fn);
        target.off('dispose', fn);
      }
    }

    return this;
  };

  /**
   * Add an event listener that gets triggered only once and then gets removed.
   *
   * @param {string|Component|string[]} [first]
   *        The event name, and array of event names, or another `Component`.
   *
   * @param {EventTarget~EventListener|string|string[]} [second]
   *        The listener function, an event name, or an Array of events names.
   *
   * @param {EventTarget~EventListener} [third]
   *        The event handler if `first` is a `Component` and `second` is an event name
   *        or an Array of event names.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   */


  Component.prototype.one = function one(first, second, third) {
    var _this3 = this,
        _arguments = arguments;

    if (typeof first === 'string' || Array.isArray(first)) {
      Events.one(this.el_, first, Fn.bind(this, second));
    } else {
      var target = first;
      var type = second;
      var fn = Fn.bind(this, third);

      var newFunc = function newFunc() {
        _this3.off(target, type, newFunc);
        fn.apply(null, _arguments);
      };

      // Keep the same function ID so we can remove it later
      newFunc.guid = fn.guid;

      this.on(target, type, newFunc);
    }

    return this;
  };

  /**
   * Trigger an event on an element.
   *
   * @param {EventTarget~Event|Object|string} event
   *        The event name, and Event, or an event-like object with a type attribute
   *        set to the event name.
   *
   * @param {Object} [hash]
   *        Data hash to pass along with the event
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   */


  Component.prototype.trigger = function trigger(event, hash) {
    Events.trigger(this.el_, event, hash);
    return this;
  };

  /**
   * Bind a listener to the component's ready state. If the ready event has already
   * happened it will trigger the function immediately.
   *
   * @param  {Component~ReadyCallback} fn
   *         A function to call when ready is triggered.
   *
   * @param  {boolean} [sync=false]
   *         Execute the listener synchronously if `Component` is ready.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   */


  Component.prototype.ready = function ready(fn) {
    var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (fn) {
      if (this.isReady_) {
        if (sync) {
          fn.call(this);
        } else {
          // Call the function asynchronously by default for consistency
          this.setTimeout(fn, 1);
        }
      } else {
        this.readyQueue_ = this.readyQueue_ || [];
        this.readyQueue_.push(fn);
      }
    }
    return this;
  };

  /**
   * Trigger all the ready listeners for this `Component`.
   *
   * @fires Component#ready
   */


  Component.prototype.triggerReady = function triggerReady() {
    this.isReady_ = true;

    // Ensure ready is triggerd asynchronously
    this.setTimeout(function () {
      var readyQueue = this.readyQueue_;

      // Reset Ready Queue
      this.readyQueue_ = [];

      if (readyQueue && readyQueue.length > 0) {
        readyQueue.forEach(function (fn) {
          fn.call(this);
        }, this);
      }

      // Allow for using event listeners also
      /**
       * Triggered when a `Component` is ready.
       *
       * @event Component#ready
       * @type {EventTarget~Event}
       */
      this.trigger('ready');
    }, 1);
  };

  /**
   * Find a single DOM element matching a `selector`. This can be within the `Component`s
   * `contentEl()` or another custom context.
   *
   * @param {string} selector
   *        A valid CSS selector, which will be passed to `querySelector`.
   *
   * @param {Element|string} [context=this.contentEl()]
   *        A DOM element within which to query. Can also be a selector string in
   *        which case the first matching element will get used as context. If
   *        missing `this.contentEl()` gets used. If  `this.contentEl()` returns
   *        nothing it falls back to `document`.
   *
   * @return {Element|null}
   *         the dom element that was found, or null
   *
   * @see [Information on CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
   */


  Component.prototype.$ = function $(selector, context) {
    return Dom.$(selector, context || this.contentEl());
  };

  /**
   * Finds all DOM element matching a `selector`. This can be within the `Component`s
   * `contentEl()` or another custom context.
   *
   * @param {string} selector
   *        A valid CSS selector, which will be passed to `querySelectorAll`.
   *
   * @param {Element|string} [context=this.contentEl()]
   *        A DOM element within which to query. Can also be a selector string in
   *        which case the first matching element will get used as context. If
   *        missing `this.contentEl()` gets used. If  `this.contentEl()` returns
   *        nothing it falls back to `document`.
   *
   * @return {NodeList}
   *         a list of dom elements that were found
   *
   * @see [Information on CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
   */


  Component.prototype.$$ = function $$(selector, context) {
    return Dom.$$(selector, context || this.contentEl());
  };

  /**
   * Check if a component's element has a CSS class name.
   *
   * @param {string} classToCheck
   *        CSS class name to check.
   *
   * @return {boolean}
   *         - True if the `Component` has the class.
   *         - False if the `Component` does not have the class`
   */


  Component.prototype.hasClass = function hasClass(classToCheck) {
    return Dom.hasElClass(this.el_, classToCheck);
  };

  /**
   * Add a CSS class name to the `Component`s element.
   *
   * @param {string} classToAdd
   *        CSS class name to add
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   */


  Component.prototype.addClass = function addClass(classToAdd) {
    Dom.addElClass(this.el_, classToAdd);
    return this;
  };

  /**
   * Remove a CSS class name from the `Component`s element.
   *
   * @param {string} classToRemove
   *        CSS class name to remove
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   */


  Component.prototype.removeClass = function removeClass(classToRemove) {
    Dom.removeElClass(this.el_, classToRemove);
    return this;
  };

  /**
   * Add or remove a CSS class name from the component's element.
   * - `classToToggle` gets added when {@link Component#hasClass} would return false.
   * - `classToToggle` gets removed when {@link Component#hasClass} would return true.
   *
   * @param  {string} classToToggle
   *         The class to add or remove based on (@link Component#hasClass}
   *
   * @param  {boolean|Dom~predicate} [predicate]
   *         An {@link Dom~predicate} function or a boolean
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   */


  Component.prototype.toggleClass = function toggleClass(classToToggle, predicate) {
    Dom.toggleElClass(this.el_, classToToggle, predicate);
    return this;
  };

  /**
   * Show the `Component`s element if it is hidden by removing the
   * 'vjs-hidden' class name from it.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   */


  Component.prototype.show = function show() {
    this.removeClass('vjs-hidden');
    return this;
  };

  /**
   * Hide the `Component`s element if it is currently showing by adding the
   * 'vjs-hidden` class name to it.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   */


  Component.prototype.hide = function hide() {
    this.addClass('vjs-hidden');
    return this;
  };

  /**
   * Lock a `Component`s element in its visible state by adding the 'vjs-lock-showing'
   * class name to it. Used during fadeIn/fadeOut.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   *
   * @private
   */


  Component.prototype.lockShowing = function lockShowing() {
    this.addClass('vjs-lock-showing');
    return this;
  };

  /**
   * Unlock a `Component`s element from its visible state by removing the 'vjs-lock-showing'
   * class name from it. Used during fadeIn/fadeOut.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   *
   * @private
   */


  Component.prototype.unlockShowing = function unlockShowing() {
    this.removeClass('vjs-lock-showing');
    return this;
  };

  /**
   * Get the value of an attribute on the `Component`s element.
   *
   * @param {string} attribute
   *        Name of the attribute to get the value from.
   *
   * @return {string|null}
   *         - The value of the attribute that was asked for.
   *         - Can be an empty string on some browsers if the attribute does not exist
   *           or has no value
   *         - Most browsers will return null if the attibute does not exist or has
   *           no value.
   *
   * @see [DOM API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute}
   */


  Component.prototype.getAttribute = function getAttribute(attribute) {
    return Dom.getAttribute(this.el_, attribute);
  };

  /**
   * Set the value of an attribute on the `Component`'s element
   *
   * @param {string} attribute
   *        Name of the attribute to set.
   *
   * @param {string} value
   *        Value to set the attribute to.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   *
   * @see [DOM API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute}
   */


  Component.prototype.setAttribute = function setAttribute(attribute, value) {
    Dom.setAttribute(this.el_, attribute, value);
    return this;
  };

  /**
   * Remove an attribute from the `Component`s element.
   *
   * @param {string} attribute
   *        Name of the attribute to remove.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   *
   * @see [DOM API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute}
   */


  Component.prototype.removeAttribute = function removeAttribute(attribute) {
    Dom.removeAttribute(this.el_, attribute);
    return this;
  };

  /**
   * Get or set the width of the component based upon the CSS styles.
   * See {@link Component#dimension} for more detailed information.
   *
   * @param {number|string} [num]
   *        The width that you want to set postfixed with '%', 'px' or nothing.
   *
   * @param {boolean} [skipListeners]
   *        Skip the resize event trigger
   *
   * @return {Component|number|string}
   *         - The width when getting, zero if there is no width. Can be a string
   *           postpixed with '%' or 'px'.
   *         - Returns itself when setting; method can be chained.
   */


  Component.prototype.width = function width(num, skipListeners) {
    return this.dimension('width', num, skipListeners);
  };

  /**
   * Get or set the height of the component based upon the CSS styles.
   * See {@link Component#dimension} for more detailed information.
   *
   * @param {number|string} [num]
   *        The height that you want to set postfixed with '%', 'px' or nothing.
   *
   * @param {boolean} [skipListeners]
   *        Skip the resize event trigger
   *
   * @return {Component|number|string}
   *         - The width when getting, zero if there is no width. Can be a string
   *           postpixed with '%' or 'px'.
   *         - Returns itself when setting; method can be chained.
   */


  Component.prototype.height = function height(num, skipListeners) {
    return this.dimension('height', num, skipListeners);
  };

  /**
   * Set both the width and height of the `Component` element at the same time.
   *
   * @param  {number|string} width
   *         Width to set the `Component`s element to.
   *
   * @param  {number|string} height
   *         Height to set the `Component`s element to.
   *
   * @return {Component}
   *         Returns itself; method can be chained.
   */


  Component.prototype.dimensions = function dimensions(width, height) {
    // Skip resize listeners on width for optimization
    return this.width(width, true).height(height);
  };

  /**
   * Get or set width or height of the `Component` element. This is the shared code
   * for the {@link Component#width} and {@link Component#height}.
   *
   * Things to know:
   * - If the width or height in an number this will return the number postfixed with 'px'.
   * - If the width/height is a percent this will return the percent postfixed with '%'
   * - Hidden elements have a width of 0 with `window.getComputedStyle`. This function
   *   defaults to the `Component`s `style.width` and falls back to `window.getComputedStyle`.
   *   See [this]{@link http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/}
   *   for more information
   * - If you want the computed style of the component, use {@link Component#currentWidth}
   *   and {@link {Component#currentHeight}
   *
   * @fires Component#resize
   *
   * @param {string} widthOrHeight
   8        'width' or 'height'
   *
   * @param  {number|string} [num]
   8         New dimension
   *
   * @param  {boolean} [skipListeners]
   *         Skip resize event trigger
   *
   * @return {Component}
   *         - the dimension when getting or 0 if unset
   *         - Returns itself when setting; method can be chained.
   */


  Component.prototype.dimension = function dimension(widthOrHeight, num, skipListeners) {
    if (num !== undefined) {
      // Set to zero if null or literally NaN (NaN !== NaN)
      if (num === null || num !== num) {
        num = 0;
      }

      // Check if using css width/height (% or px) and adjust
      if (('' + num).indexOf('%') !== -1 || ('' + num).indexOf('px') !== -1) {
        this.el_.style[widthOrHeight] = num;
      } else if (num === 'auto') {
        this.el_.style[widthOrHeight] = '';
      } else {
        this.el_.style[widthOrHeight] = num + 'px';
      }

      // skipListeners allows us to avoid triggering the resize event when setting both width and height
      if (!skipListeners) {
        /**
         * Triggered when a component is resized.
         *
         * @event Component#resize
         * @type {EventTarget~Event}
         */
        this.trigger('resize');
      }

      // Return component
      return this;
    }

    // Not setting a value, so getting it
    // Make sure element exists
    if (!this.el_) {
      return 0;
    }

    // Get dimension value from style
    var val = this.el_.style[widthOrHeight];
    var pxIndex = val.indexOf('px');

    if (pxIndex !== -1) {
      // Return the pixel value with no 'px'
      return parseInt(val.slice(0, pxIndex), 10);
    }

    // No px so using % or no style was set, so falling back to offsetWidth/height
    // If component has display:none, offset will return 0
    // TODO: handle display:none and no dimension style using px
    return parseInt(this.el_['offset' + (0, _toTitleCase2['default'])(widthOrHeight)], 10);
  };

  /**
   * Get the width or the height of the `Component` elements computed style. Uses
   * `window.getComputedStyle`.
   *
   * @param {string} widthOrHeight
   *        A string containing 'width' or 'height'. Whichever one you want to get.
   *
   * @return {number}
   *         The dimension that gets asked for or 0 if nothing was set
   *         for that dimension.
   */


  Component.prototype.currentDimension = function currentDimension(widthOrHeight) {
    var computedWidthOrHeight = 0;

    if (widthOrHeight !== 'width' && widthOrHeight !== 'height') {
      throw new Error('currentDimension only accepts width or height value');
    }

    if (typeof _window2['default'].getComputedStyle === 'function') {
      var computedStyle = _window2['default'].getComputedStyle(this.el_);

      computedWidthOrHeight = computedStyle.getPropertyValue(widthOrHeight) || computedStyle[widthOrHeight];
    }

    // remove 'px' from variable and parse as integer
    computedWidthOrHeight = parseFloat(computedWidthOrHeight);

    // if the computed value is still 0, it's possible that the browser is lying
    // and we want to check the offset values.
    // This code also runs on IE8 and wherever getComputedStyle doesn't exist.
    if (computedWidthOrHeight === 0) {
      var rule = 'offset' + (0, _toTitleCase2['default'])(widthOrHeight);

      computedWidthOrHeight = this.el_[rule];
    }

    return computedWidthOrHeight;
  };

  /**
   * An object that contains width and height values of the `Component`s
   * computed style. Uses `window.getComputedStyle`.
   *
   * @typedef {Object} Component~DimensionObject
   *
   * @property {number} width
   *           The width of the `Component`s computed style.
   *
   * @property {number} height
   *           The height of the `Component`s computed style.
   */

  /**
   * Get an object that contains width and height values of the `Component`s
   * computed style.
   *
   * @return {Component~DimensionObject}
   *         The dimensions of the components element
   */


  Component.prototype.currentDimensions = function currentDimensions() {
    return {
      width: this.currentDimension('width'),
      height: this.currentDimension('height')
    };
  };

  /**
   * Get the width of the `Component`s computed style. Uses `window.getComputedStyle`.
   *
   * @return {number} width
   *           The width of the `Component`s computed style.
   */


  Component.prototype.currentWidth = function currentWidth() {
    return this.currentDimension('width');
  };

  /**
   * Get the height of the `Component`s computed style. Uses `window.getComputedStyle`.
   *
   * @return {number} height
   *           The height of the `Component`s computed style.
   */


  Component.prototype.currentHeight = function currentHeight() {
    return this.currentDimension('height');
  };

  /**
   * Set the focus to this component
   */


  Component.prototype.focus = function focus() {
    this.el_.focus();
  };

  /**
   * Remove the focus from this component
   */


  Component.prototype.blur = function blur() {
    this.el_.blur();
  };

  /**
   * Emit a 'tap' events when touch event support gets detected. This gets used to
   * support toggling the controls through a tap on the video. They get enabled
   * because every sub-component would have extra overhead otherwise.
   *
   * @private
   * @fires Component#tap
   * @listens Component#touchstart
   * @listens Component#touchmove
   * @listens Component#touchleave
   * @listens Component#touchcancel
   * @listens Component#touchend
    */


  Component.prototype.emitTapEvents = function emitTapEvents() {
    // Track the start time so we can determine how long the touch lasted
    var touchStart = 0;
    var firstTouch = null;

    // Maximum movement allowed during a touch event to still be considered a tap
    // Other popular libs use anywhere from 2 (hammer.js) to 15,
    // so 10 seems like a nice, round number.
    var tapMovementThreshold = 10;

    // The maximum length a touch can be while still being considered a tap
    var touchTimeThreshold = 200;

    var couldBeTap = void 0;

    this.on('touchstart', function (event) {
      // If more than one finger, don't consider treating this as a click
      if (event.touches.length === 1) {
        // Copy pageX/pageY from the object
        firstTouch = {
          pageX: event.touches[0].pageX,
          pageY: event.touches[0].pageY
        };
        // Record start time so we can detect a tap vs. "touch and hold"
        touchStart = new Date().getTime();
        // Reset couldBeTap tracking
        couldBeTap = true;
      }
    });

    this.on('touchmove', function (event) {
      // If more than one finger, don't consider treating this as a click
      if (event.touches.length > 1) {
        couldBeTap = false;
      } else if (firstTouch) {
        // Some devices will throw touchmoves for all but the slightest of taps.
        // So, if we moved only a small distance, this could still be a tap
        var xdiff = event.touches[0].pageX - firstTouch.pageX;
        var ydiff = event.touches[0].pageY - firstTouch.pageY;
        var touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);

        if (touchDistance > tapMovementThreshold) {
          couldBeTap = false;
        }
      }
    });

    var noTap = function noTap() {
      couldBeTap = false;
    };

    // TODO: Listen to the original target. http://youtu.be/DujfpXOKUp8?t=13m8s
    this.on('touchleave', noTap);
    this.on('touchcancel', noTap);

    // When the touch ends, measure how long it took and trigger the appropriate
    // event
    this.on('touchend', function (event) {
      firstTouch = null;
      // Proceed only if the touchmove/leave/cancel event didn't happen
      if (couldBeTap === true) {
        // Measure how long the touch lasted
        var touchTime = new Date().getTime() - touchStart;

        // Make sure the touch was less than the threshold to be considered a tap
        if (touchTime < touchTimeThreshold) {
          // Don't let browser turn this into a click
          event.preventDefault();
          /**
           * Triggered when a `Component` is tapped.
           *
           * @event Component#tap
           * @type {EventTarget~Event}
           */
          this.trigger('tap');
          // It may be good to copy the touchend event object and change the
          // type to tap, if the other event properties aren't exact after
          // Events.fixEvent runs (e.g. event.target)
        }
      }
    });
  };

  /**
   * This function reports user activity whenever touch events happen. This can get
   * turned off by any sub-components that wants touch events to act another way.
   *
   * Report user touch activity when touch events occur. User activity gets used to
   * determine when controls should show/hide. It is simple when it comes to mouse
   * events, because any mouse event should show the controls. So we capture mouse
   * events that bubble up to the player and report activity when that happens.
   * With touch events it isn't as easy as `touchstart` and `touchend` toggle player
   * controls. So touch events can't help us at the player level either.
   *
   * User activity gets checked asynchronously. So what could happen is a tap event
   * on the video turns the controls off. Then the `touchend` event bubbles up to
   * the player. Which, if it reported user activity, would turn the controls right
   * back on. We also don't want to completely block touch events from bubbling up.
   * Furthermore a `touchmove` event and anything other than a tap, should not turn
   * controls back on.
   *
   * @listens Component#touchstart
   * @listens Component#touchmove
   * @listens Component#touchend
   * @listens Component#touchcancel
   */


  Component.prototype.enableTouchActivity = function enableTouchActivity() {
    // Don't continue if the root player doesn't support reporting user activity
    if (!this.player() || !this.player().reportUserActivity) {
      return;
    }

    // listener for reporting that the user is active
    var report = Fn.bind(this.player(), this.player().reportUserActivity);

    var touchHolding = void 0;

    this.on('touchstart', function () {
      report();
      // For as long as the they are touching the device or have their mouse down,
      // we consider them active even if they're not moving their finger or mouse.
      // So we want to continue to update that they are active
      this.clearInterval(touchHolding);
      // report at the same interval as activityCheck
      touchHolding = this.setInterval(report, 250);
    });

    var touchEnd = function touchEnd(event) {
      report();
      // stop the interval that maintains activity if the touch is holding
      this.clearInterval(touchHolding);
    };

    this.on('touchmove', report);
    this.on('touchend', touchEnd);
    this.on('touchcancel', touchEnd);
  };

  /**
   * A callback that has no parameters and is bound into `Component`s context.
   *
   * @callback Component~GenericCallback
   * @this Component
   */

  /**
   * Creates a function that runs after an `x` millisecond timeout. This function is a
   * wrapper around `window.setTimeout`. There are a few reasons to use this one
   * instead though:
   * 1. It gets cleared via  {@link Component#clearTimeout} when
   *    {@link Component#dispose} gets called.
   * 2. The function callback will gets turned into a {@link Component~GenericCallback}
   *
   * > Note: You can use `window.clearTimeout` on the id returned by this function. This
   *         will cause its dispose listener not to get cleaned up! Please use
   *         {@link Component#clearTimeout} or {@link Component#dispose}.
   *
   * @param {Component~GenericCallback} fn
   *        The function that will be run after `timeout`.
   *
   * @param {number} timeout
   *        Timeout in milliseconds to delay before executing the specified function.
   *
   * @return {number}
   *         Returns a timeout ID that gets used to identify the timeout. It can also
   *         get used in {@link Component#clearTimeout} to clear the timeout that
   *         was set.
   *
   * @listens Component#dispose
   * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout}
   */


  Component.prototype.setTimeout = function setTimeout(fn, timeout) {
    fn = Fn.bind(this, fn);

    var timeoutId = _window2['default'].setTimeout(fn, timeout);
    var disposeFn = function disposeFn() {
      this.clearTimeout(timeoutId);
    };

    disposeFn.guid = 'vjs-timeout-' + timeoutId;

    this.on('dispose', disposeFn);

    return timeoutId;
  };

  /**
   * Clears a timeout that gets created via `window.setTimeout` or
   * {@link Component#setTimeout}. If you set a timeout via {@link Component#setTimeout}
   * use this function instead of `window.clearTimout`. If you don't your dispose
   * listener will not get cleaned up until {@link Component#dispose}!
   *
   * @param {number} timeoutId
   *        The id of the timeout to clear. The return value of
   *        {@link Component#setTimeout} or `window.setTimeout`.
   *
   * @return {number}
   *         Returns the timeout id that was cleared.
   *
   * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearTimeout}
   */


  Component.prototype.clearTimeout = function clearTimeout(timeoutId) {
    _window2['default'].clearTimeout(timeoutId);

    var disposeFn = function disposeFn() {};

    disposeFn.guid = 'vjs-timeout-' + timeoutId;

    this.off('dispose', disposeFn);

    return timeoutId;
  };

  /**
   * Creates a function that gets run every `x` milliseconds. This function is a wrapper
   * around `window.setInterval`. There are a few reasons to use this one instead though.
   * 1. It gets cleared via  {@link Component#clearInterval} when
   *    {@link Component#dispose} gets called.
   * 2. The function callback will be a {@link Component~GenericCallback}
   *
   * @param {Component~GenericCallback} fn
   *        The function to run every `x` seconds.
   *
   * @param {number} interval
   *        Execute the specified function every `x` milliseconds.
   *
   * @return {number}
   *         Returns an id that can be used to identify the interval. It can also be be used in
   *         {@link Component#clearInterval} to clear the interval.
   *
   * @listens Component#dispose
   * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval}
   */


  Component.prototype.setInterval = function setInterval(fn, interval) {
    fn = Fn.bind(this, fn);

    var intervalId = _window2['default'].setInterval(fn, interval);

    var disposeFn = function disposeFn() {
      this.clearInterval(intervalId);
    };

    disposeFn.guid = 'vjs-interval-' + intervalId;

    this.on('dispose', disposeFn);

    return intervalId;
  };

  /**
   * Clears an interval that gets created via `window.setInterval` or
   * {@link Component#setInterval}. If you set an inteval via {@link Component#setInterval}
   * use this function instead of `window.clearInterval`. If you don't your dispose
   * listener will not get cleaned up until {@link Component#dispose}!
   *
   * @param {number} intervalId
   *        The id of the interval to clear. The return value of
   *        {@link Component#setInterval} or `window.setInterval`.
   *
   * @return {number}
   *         Returns the interval id that was cleared.
   *
   * @see [Similar to]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval}
   */


  Component.prototype.clearInterval = function clearInterval(intervalId) {
    _window2['default'].clearInterval(intervalId);

    var disposeFn = function disposeFn() {};

    disposeFn.guid = 'vjs-interval-' + intervalId;

    this.off('dispose', disposeFn);

    return intervalId;
  };

  /**
   * Register a `Component` with `videojs` given the name and the component.
   *
   * > NOTE: {@link Tech}s should not be registered as a `Component`. {@link Tech}s
   *         should be registered using {@link Tech.registerTech} or
   *         {@link videojs:videojs.registerTech}.
   *
   * > NOTE: This function can also be seen on videojs as
   *         {@link videojs:videojs.registerComponent}.
   *
   * @param {string} name
   *        The name of the `Component` to register.
   *
   * @param {Component} comp
   *        The `Component` class to register.
   *
   * @return {Component}
   *         The `Component` that was registered.
   */


  Component.registerComponent = function registerComponent(name, comp) {
    if (!name) {
      return;
    }

    name = (0, _toTitleCase2['default'])(name);

    if (!Component.components_) {
      Component.components_ = {};
    }

    if (name === 'Player' && Component.components_[name]) {
      var Player = Component.components_[name];

      // If we have players that were disposed, then their name will still be
      // in Players.players. So, we must loop through and verify that the value
      // for each item is not null. This allows registration of the Player component
      // after all players have been disposed or before any were created.
      if (Player.players && Object.keys(Player.players).length > 0 && Object.keys(Player.players).map(function (playerName) {
        return Player.players[playerName];
      }).every(Boolean)) {
        throw new Error('Can not register Player component after player has been created');
      }
    }

    Component.components_[name] = comp;

    return comp;
  };

  /**
   * Get a `Component` based on the name it was registered with.
   *
   * @param {string} name
   *        The Name of the component to get.
   *
   * @return {Component}
   *         The `Component` that got registered under the given name.
   *
   * @deprecated In `videojs` 6 this will not return `Component`s that were not
   *             registered using {@link Component.registerComponent}. Currently we
   *             check the global `videojs` object for a `Component` name and
   *             return that if it exists.
   */


  Component.getComponent = function getComponent(name) {
    if (!name) {
      return;
    }

    name = (0, _toTitleCase2['default'])(name);

    if (Component.components_ && Component.components_[name]) {
      return Component.components_[name];
    }

    if (_window2['default'] && _window2['default'].videojs && _window2['default'].videojs[name]) {
      _log2['default'].warn('The ' + name + ' component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)');

      return _window2['default'].videojs[name];
    }
  };

  /**
   * Sets up the constructor using the supplied init method or uses the init of the
   * parent object.
   *
   * @param {Object} [props={}]
   *        An object of properties.
   *
   * @return {Object}
   *         the extended object.
   *
   * @deprecated since version 5
   */


  Component.extend = function extend(props) {
    props = props || {};

    _log2['default'].warn('Component.extend({}) has been deprecated, ' + ' use videojs.extend(Component, {}) instead');

    // Set up the constructor using the supplied init method
    // or using the init of the parent object
    // Make sure to check the unobfuscated version for external libs
    var init = props.init || props.init || this.prototype.init || this.prototype.init || function () {};
    // In Resig's simple class inheritance (previously used) the constructor
    //  is a function that calls `this.init.apply(arguments)`
    // However that would prevent us from using `ParentObject.call(this);`
    //  in a Child constructor because the `this` in `this.init`
    //  would still refer to the Child and cause an infinite loop.
    // We would instead have to do
    //    `ParentObject.prototype.init.apply(this, arguments);`
    //  Bleh. We're not creating a _super() function, so it's good to keep
    //  the parent constructor reference simple.
    var subObj = function subObj() {
      init.apply(this, arguments);
    };

    // Inherit from this object's prototype
    subObj.prototype = Object.create(this.prototype);
    // Reset the constructor property for subObj otherwise
    // instances of subObj would have the constructor of the parent Object
    subObj.prototype.constructor = subObj;

    // Make the class extendable
    subObj.extend = Component.extend;

    // Extend subObj's prototype with functions and other properties from props
    for (var name in props) {
      if (props.hasOwnProperty(name)) {
        subObj.prototype[name] = props[name];
      }
    }

    return subObj;
  };

  return Component;
}();

Component.registerComponent('Component', Component);
exports['default'] = Component;

},{"81":81,"82":82,"83":83,"85":85,"86":86,"87":87,"91":91,"95":95}],6:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _trackButton = _dereq_(36);

var _trackButton2 = _interopRequireDefault(_trackButton);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _audioTrackMenuItem = _dereq_(7);

var _audioTrackMenuItem2 = _interopRequireDefault(_audioTrackMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file audio-track-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The base class for buttons that toggle specific {@link AudioTrack} types.
 *
 * @extends TrackButton
 */
var AudioTrackButton = function (_TrackButton) {
  _inherits(AudioTrackButton, _TrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options={}]
   *        The key/value store of player options.
   */
  function AudioTrackButton(player) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, AudioTrackButton);

    options.tracks = player.audioTracks && player.audioTracks();

    var _this = _possibleConstructorReturn(this, _TrackButton.call(this, player, options));

    _this.el_.setAttribute('aria-label', 'Audio Menu');
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  AudioTrackButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-audio-button ' + _TrackButton.prototype.buildCSSClass.call(this);
  };

  /**
   * Create a menu item for each audio track
   *
   * @param {AudioTrackMenuItem[]} [items=[]]
   *        An array of existing menu items to use.
   *
   * @return {AudioTrackMenuItem[]}
   *         An array of menu items
   */


  AudioTrackButton.prototype.createItems = function createItems() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    // if there's only one audio track, there no point in showing it
    this.hideThreshold_ = 1;

    var tracks = this.player_.audioTracks && this.player_.audioTracks();

    if (!tracks) {
      return items;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      items.push(new _audioTrackMenuItem2['default'](this.player_, {
        track: track,
        // MenuItem is selectable
        selectable: true
      }));
    }

    return items;
  };

  return AudioTrackButton;
}(_trackButton2['default']);

/**
 * The text that should display over the `AudioTrackButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


AudioTrackButton.prototype.controlText_ = 'Audio Track';
_component2['default'].registerComponent('AudioTrackButton', AudioTrackButton);
exports['default'] = AudioTrackButton;

},{"36":36,"5":5,"7":7}],7:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _menuItem = _dereq_(48);

var _menuItem2 = _interopRequireDefault(_menuItem);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file audio-track-menu-item.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * An {@link AudioTrack} {@link MenuItem}
 *
 * @extends MenuItem
 */
var AudioTrackMenuItem = function (_MenuItem) {
  _inherits(AudioTrackMenuItem, _MenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function AudioTrackMenuItem(player, options) {
    _classCallCheck(this, AudioTrackMenuItem);

    var track = options.track;
    var tracks = player.audioTracks();

    // Modify options for parent MenuItem class's init.
    options.label = track.label || track.language || 'Unknown';
    options.selected = track.enabled;

    var _this = _possibleConstructorReturn(this, _MenuItem.call(this, player, options));

    _this.track = track;

    if (tracks) {
      var changeHandler = Fn.bind(_this, _this.handleTracksChange);

      tracks.addEventListener('change', changeHandler);
      _this.on('dispose', function () {
        tracks.removeEventListener('change', changeHandler);
      });
    }
    return _this;
  }

  /**
   * This gets called when an `AudioTrackMenuItem is "clicked". See {@link ClickableComponent}
   * for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  AudioTrackMenuItem.prototype.handleClick = function handleClick(event) {
    var tracks = this.player_.audioTracks();

    _MenuItem.prototype.handleClick.call(this, event);

    if (!tracks) {
      return;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      track.enabled = track === this.track;
    }
  };

  /**
   * Handle any {@link AudioTrack} change.
   *
   * @param {EventTarget~Event} [event]
   *        The {@link AudioTrackList#change} event that caused this to run.
   *
   * @listens AudioTrackList#change
   */


  AudioTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
    this.selected(this.track.enabled);
  };

  return AudioTrackMenuItem;
}(_menuItem2['default']);

_component2['default'].registerComponent('AudioTrackMenuItem', AudioTrackMenuItem);
exports['default'] = AudioTrackMenuItem;

},{"48":48,"5":5,"83":83}],8:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

_dereq_(12);

_dereq_(32);

_dereq_(33);

_dereq_(35);

_dereq_(34);

_dereq_(10);

_dereq_(18);

_dereq_(9);

_dereq_(38);

_dereq_(40);

_dereq_(11);

_dereq_(25);

_dereq_(27);

_dereq_(29);

_dereq_(24);

_dereq_(6);

_dereq_(13);

_dereq_(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file control-bar.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// Required children


/**
 * Container of main controls.
 *
 * @extends Component
 */
var ControlBar = function (_Component) {
  _inherits(ControlBar, _Component);

  function ControlBar() {
    _classCallCheck(this, ControlBar);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */
  ControlBar.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-control-bar',
      dir: 'ltr'
    }, {
      // The control bar is a group, so it can contain menuitems
      role: 'group'
    });
  };

  return ControlBar;
}(_component2['default']);

/**
 * Default options for `ControlBar`
 *
 * @type {Object}
 * @private
 */


ControlBar.prototype.options_ = {
  children: ['playToggle', 'volumeMenuButton', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'liveDisplay', 'remainingTimeDisplay', 'customControlSpacer', 'playbackRateMenuButton', 'chaptersButton', 'descriptionsButton', 'subtitlesButton', 'captionsButton', 'audioTrackButton', 'fullscreenToggle']
};

_component2['default'].registerComponent('ControlBar', ControlBar);
exports['default'] = ControlBar;

},{"10":10,"11":11,"12":12,"13":13,"18":18,"21":21,"24":24,"25":25,"27":27,"29":29,"32":32,"33":33,"34":34,"35":35,"38":38,"40":40,"5":5,"6":6,"9":9}],9:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _button = _dereq_(2);

var _button2 = _interopRequireDefault(_button);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file fullscreen-toggle.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Toggle fullscreen video
 *
 * @extends Button
 */
var FullscreenToggle = function (_Button) {
  _inherits(FullscreenToggle, _Button);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function FullscreenToggle(player, options) {
    _classCallCheck(this, FullscreenToggle);

    var _this = _possibleConstructorReturn(this, _Button.call(this, player, options));

    _this.on(player, 'fullscreenchange', _this.handleFullscreenChange);
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  FullscreenToggle.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-fullscreen-control ' + _Button.prototype.buildCSSClass.call(this);
  };

  /**
   * Handles fullscreenchange on the player and change control text accordingly.
   *
   * @param {EventTarget~Event} [event]
   *        The {@link Player#fullscreenchange} event that caused this function to be
   *        called.
   *
   * @listens Player#fullscreenchange
   */


  FullscreenToggle.prototype.handleFullscreenChange = function handleFullscreenChange(event) {
    if (this.player_.isFullscreen()) {
      this.controlText('Non-Fullscreen');
    } else {
      this.controlText('Fullscreen');
    }
  };

  /**
   * This gets called when an `FullscreenToggle` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  FullscreenToggle.prototype.handleClick = function handleClick(event) {
    if (!this.player_.isFullscreen()) {
      this.player_.requestFullscreen();
    } else {
      this.player_.exitFullscreen();
    }
  };

  return FullscreenToggle;
}(_button2['default']);

/**
 * The text that should display over the `FullscreenToggle`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


FullscreenToggle.prototype.controlText_ = 'Fullscreen';

_component2['default'].registerComponent('FullscreenToggle', FullscreenToggle);
exports['default'] = FullscreenToggle;

},{"2":2,"5":5}],10:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file live-display.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// TODO - Future make it click to snap to live

/**
 * Displays the live indicator when duration is Infinity.
 *
 * @extends Component
 */
var LiveDisplay = function (_Component) {
  _inherits(LiveDisplay, _Component);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function LiveDisplay(player, options) {
    _classCallCheck(this, LiveDisplay);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    _this.updateShowing();
    _this.on(_this.player(), 'durationchange', _this.updateShowing);
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  LiveDisplay.prototype.createEl = function createEl() {
    var el = _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-live-control vjs-control'
    });

    this.contentEl_ = Dom.createEl('div', {
      className: 'vjs-live-display',
      innerHTML: '<span class="vjs-control-text">' + this.localize('Stream Type') + '</span>' + this.localize('LIVE')
    }, {
      'aria-live': 'off'
    });

    el.appendChild(this.contentEl_);
    return el;
  };

  /**
   * Check the duration to see if the LiveDisplay should be showing or not. Then show/hide
   * it accordingly
   *
   * @param {EventTarget~Event} [event]
   *        The {@link Player#durationchange} event that caused this function to run.
   *
   * @listens Player#durationchange
   */


  LiveDisplay.prototype.updateShowing = function updateShowing(event) {
    if (this.player().duration() === Infinity) {
      this.show();
    } else {
      this.hide();
    }
  };

  return LiveDisplay;
}(_component2['default']);

_component2['default'].registerComponent('LiveDisplay', LiveDisplay);
exports['default'] = LiveDisplay;

},{"5":5,"81":81}],11:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _button = _dereq_(2);

var _button2 = _interopRequireDefault(_button);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file mute-toggle.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * A button component for muting the audio.
 *
 * @extends Button
 */
var MuteToggle = function (_Button) {
  _inherits(MuteToggle, _Button);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function MuteToggle(player, options) {
    _classCallCheck(this, MuteToggle);

    var _this = _possibleConstructorReturn(this, _Button.call(this, player, options));

    _this.on(player, 'volumechange', _this.update);

    // hide mute toggle if the current tech doesn't support volume control
    if (player.tech_ && player.tech_.featuresVolumeControl === false) {
      _this.addClass('vjs-hidden');
    }

    _this.on(player, 'loadstart', function () {
      // We need to update the button to account for a default muted state.
      this.update();

      if (player.tech_.featuresVolumeControl === false) {
        this.addClass('vjs-hidden');
      } else {
        this.removeClass('vjs-hidden');
      }
    });
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  MuteToggle.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-mute-control ' + _Button.prototype.buildCSSClass.call(this);
  };

  /**
   * This gets called when an `MuteToggle` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  MuteToggle.prototype.handleClick = function handleClick(event) {
    this.player_.muted(this.player_.muted() ? false : true);
  };

  /**
   * Update the state of volume.
   *
   * @param {EventTarget~Event} [event]
   *        The {@link Player#loadstart} event if this function was called through an
   *        event.
   *
   * @listens Player#loadstart
   */


  MuteToggle.prototype.update = function update(event) {
    var vol = this.player_.volume();
    var level = 3;

    if (vol === 0 || this.player_.muted()) {
      level = 0;
    } else if (vol < 0.33) {
      level = 1;
    } else if (vol < 0.67) {
      level = 2;
    }

    // Don't rewrite the button text if the actual text doesn't change.
    // This causes unnecessary and confusing information for screen reader users.
    // This check is needed because this function gets called every time the volume level is changed.
    var toMute = this.player_.muted() ? 'Unmute' : 'Mute';

    if (this.controlText() !== toMute) {
      this.controlText(toMute);
    }

    // TODO improve muted icon classes
    for (var i = 0; i < 4; i++) {
      Dom.removeElClass(this.el_, 'vjs-vol-' + i);
    }
    Dom.addElClass(this.el_, 'vjs-vol-' + level);
  };

  return MuteToggle;
}(_button2['default']);

/**
 * The text that should display over the `MuteToggle`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


MuteToggle.prototype.controlText_ = 'Mute';

_component2['default'].registerComponent('MuteToggle', MuteToggle);
exports['default'] = MuteToggle;

},{"2":2,"5":5,"81":81}],12:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _button = _dereq_(2);

var _button2 = _interopRequireDefault(_button);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file play-toggle.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Button to toggle between play and pause.
 *
 * @extends Button
 */
var PlayToggle = function (_Button) {
  _inherits(PlayToggle, _Button);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function PlayToggle(player, options) {
    _classCallCheck(this, PlayToggle);

    var _this = _possibleConstructorReturn(this, _Button.call(this, player, options));

    _this.on(player, 'play', _this.handlePlay);
    _this.on(player, 'pause', _this.handlePause);
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  PlayToggle.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-play-control ' + _Button.prototype.buildCSSClass.call(this);
  };

  /**
   * This gets called when an `PlayToggle` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  PlayToggle.prototype.handleClick = function handleClick(event) {
    if (this.player_.paused()) {
      this.player_.play();
    } else {
      this.player_.pause();
    }
  };

  /**
   * Add the vjs-playing class to the element so it can change appearance.
   *
   * @param {EventTarget~Event} [event]
   *        The event that caused this function to run.
   *
   * @listens Player#play
   */


  PlayToggle.prototype.handlePlay = function handlePlay(event) {
    this.removeClass('vjs-paused');
    this.addClass('vjs-playing');
    // change the button text to "Pause"
    this.controlText('Pause');
  };

  /**
   * Add the vjs-paused class to the element so it can change appearance.
   *
   * @param {EventTarget~Event} [event]
   *        The event that caused this function to run.
   *
   * @listens Player#pause
   */


  PlayToggle.prototype.handlePause = function handlePause(event) {
    this.removeClass('vjs-playing');
    this.addClass('vjs-paused');
    // change the button text to "Play"
    this.controlText('Play');
  };

  return PlayToggle;
}(_button2['default']);

/**
 * The text that should display over the `PlayToggle`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


PlayToggle.prototype.controlText_ = 'Play';

_component2['default'].registerComponent('PlayToggle', PlayToggle);
exports['default'] = PlayToggle;

},{"2":2,"5":5}],13:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _menuButton = _dereq_(47);

var _menuButton2 = _interopRequireDefault(_menuButton);

var _menu = _dereq_(49);

var _menu2 = _interopRequireDefault(_menu);

var _playbackRateMenuItem = _dereq_(14);

var _playbackRateMenuItem2 = _interopRequireDefault(_playbackRateMenuItem);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file playback-rate-menu-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The component for controlling the playback rate.
 *
 * @extends MenuButton
 */
var PlaybackRateMenuButton = function (_MenuButton) {
  _inherits(PlaybackRateMenuButton, _MenuButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function PlaybackRateMenuButton(player, options) {
    _classCallCheck(this, PlaybackRateMenuButton);

    var _this = _possibleConstructorReturn(this, _MenuButton.call(this, player, options));

    _this.updateVisibility();
    _this.updateLabel();

    _this.on(player, 'loadstart', _this.updateVisibility);
    _this.on(player, 'ratechange', _this.updateLabel);
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  PlaybackRateMenuButton.prototype.createEl = function createEl() {
    var el = _MenuButton.prototype.createEl.call(this);

    this.labelEl_ = Dom.createEl('div', {
      className: 'vjs-playback-rate-value',
      innerHTML: 1.0
    });

    el.appendChild(this.labelEl_);

    return el;
  };

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  PlaybackRateMenuButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-playback-rate ' + _MenuButton.prototype.buildCSSClass.call(this);
  };

  /**
   * Create the playback rate menu
   *
   * @return {Menu}
   *         Menu object populated with {@link PlaybackRateMenuItem}s
   */


  PlaybackRateMenuButton.prototype.createMenu = function createMenu() {
    var menu = new _menu2['default'](this.player());
    var rates = this.playbackRates();

    if (rates) {
      for (var i = rates.length - 1; i >= 0; i--) {
        menu.addChild(new _playbackRateMenuItem2['default'](this.player(), { rate: rates[i] + 'x' }));
      }
    }

    return menu;
  };

  /**
   * Updates ARIA accessibility attributes
   */


  PlaybackRateMenuButton.prototype.updateARIAAttributes = function updateARIAAttributes() {
    // Current playback rate
    this.el().setAttribute('aria-valuenow', this.player().playbackRate());
  };

  /**
   * This gets called when an `PlaybackRateMenuButton` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  PlaybackRateMenuButton.prototype.handleClick = function handleClick(event) {
    // select next rate option
    var currentRate = this.player().playbackRate();
    var rates = this.playbackRates();

    // this will select first one if the last one currently selected
    var newRate = rates[0];

    for (var i = 0; i < rates.length; i++) {
      if (rates[i] > currentRate) {
        newRate = rates[i];
        break;
      }
    }
    this.player().playbackRate(newRate);
  };

  /**
   * Get possible playback rates
   *
   * @return {Array}
   *         All possible playback rates
   */


  PlaybackRateMenuButton.prototype.playbackRates = function playbackRates() {
    return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates;
  };

  /**
   * Get whether playback rates is supported by the tech
   * and an array of playback rates exists
   *
   * @return {boolean}
   *         Whether changing playback rate is supported
   */


  PlaybackRateMenuButton.prototype.playbackRateSupported = function playbackRateSupported() {
    return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0;
  };

  /**
   * Hide playback rate controls when they're no playback rate options to select
   *
   * @param {EventTarget~Event} [event]
   *        The event that caused this function to run.
   *
   * @listens Player#loadstart
   */


  PlaybackRateMenuButton.prototype.updateVisibility = function updateVisibility(event) {
    if (this.playbackRateSupported()) {
      this.removeClass('vjs-hidden');
    } else {
      this.addClass('vjs-hidden');
    }
  };

  /**
   * Update button label when rate changed
   *
   * @param {EventTarget~Event} [event]
   *        The event that caused this function to run.
   *
   * @listens Player#ratechange
   */


  PlaybackRateMenuButton.prototype.updateLabel = function updateLabel(event) {
    if (this.playbackRateSupported()) {
      this.labelEl_.innerHTML = this.player().playbackRate() + 'x';
    }
  };

  return PlaybackRateMenuButton;
}(_menuButton2['default']);

/**
 * The text that should display over the `FullscreenToggle`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


PlaybackRateMenuButton.prototype.controlText_ = 'Playback Rate';

_component2['default'].registerComponent('PlaybackRateMenuButton', PlaybackRateMenuButton);
exports['default'] = PlaybackRateMenuButton;

},{"14":14,"47":47,"49":49,"5":5,"81":81}],14:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _menuItem = _dereq_(48);

var _menuItem2 = _interopRequireDefault(_menuItem);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file playback-rate-menu-item.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The specific menu item type for selecting a playback rate.
 *
 * @extends MenuItem
 */
var PlaybackRateMenuItem = function (_MenuItem) {
  _inherits(PlaybackRateMenuItem, _MenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function PlaybackRateMenuItem(player, options) {
    _classCallCheck(this, PlaybackRateMenuItem);

    var label = options.rate;
    var rate = parseFloat(label, 10);

    // Modify options for parent MenuItem class's init.
    options.label = label;
    options.selected = rate === 1;
    options.selectable = true;

    var _this = _possibleConstructorReturn(this, _MenuItem.call(this, player, options));

    _this.label = label;
    _this.rate = rate;

    _this.on(player, 'ratechange', _this.update);
    return _this;
  }

  /**
   * This gets called when an `PlaybackRateMenuItem` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  PlaybackRateMenuItem.prototype.handleClick = function handleClick(event) {
    _MenuItem.prototype.handleClick.call(this);
    this.player().playbackRate(this.rate);
  };

  /**
   * Update the PlaybackRateMenuItem when the playbackrate changes.
   *
   * @param {EventTarget~Event} [event]
   *        The `ratechange` event that caused this function to run.
   *
   * @listens Player#ratechange
   */


  PlaybackRateMenuItem.prototype.update = function update(event) {
    this.selected(this.player().playbackRate() === this.rate);
  };

  return PlaybackRateMenuItem;
}(_menuItem2['default']);

/**
 * The text that should display over the `PlaybackRateMenuItem`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


PlaybackRateMenuItem.prototype.contentElType = 'button';

_component2['default'].registerComponent('PlaybackRateMenuItem', PlaybackRateMenuItem);
exports['default'] = PlaybackRateMenuItem;

},{"48":48,"5":5}],15:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file load-progress-bar.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Shows loading progress
 *
 * @extends Component
 */
var LoadProgressBar = function (_Component) {
  _inherits(LoadProgressBar, _Component);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function LoadProgressBar(player, options) {
    _classCallCheck(this, LoadProgressBar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    _this.partEls_ = [];
    _this.on(player, 'progress', _this.update);
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  LoadProgressBar.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-load-progress',
      innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Loaded') + '</span>: 0%</span>'
    });
  };

  /**
   * Update progress bar
   *
   * @param {EventTarget~Event} [event]
   *        The `progress` event that caused this function to run.
   *
   * @listens Player#progress
   */


  LoadProgressBar.prototype.update = function update(event) {
    var buffered = this.player_.buffered();
    var duration = this.player_.duration();
    var bufferedEnd = this.player_.bufferedEnd();
    var children = this.partEls_;

    // get the percent width of a time compared to the total end
    var percentify = function percentify(time, end) {
      // no NaN
      var percent = time / end || 0;

      return (percent >= 1 ? 1 : percent) * 100 + '%';
    };

    // update the width of the progress bar
    this.el_.style.width = percentify(bufferedEnd, duration);

    // add child elements to represent the individual buffered time ranges
    for (var i = 0; i < buffered.length; i++) {
      var start = buffered.start(i);
      var end = buffered.end(i);
      var part = children[i];

      if (!part) {
        part = this.el_.appendChild(Dom.createEl());
        children[i] = part;
      }

      // set the percent based on the width of the progress bar (bufferedEnd)
      part.style.left = percentify(start, bufferedEnd);
      part.style.width = percentify(end - start, bufferedEnd);
    }

    // remove unused buffered range elements
    for (var _i = children.length; _i > buffered.length; _i--) {
      this.el_.removeChild(children[_i - 1]);
    }
    children.length = buffered.length;
  };

  return LoadProgressBar;
}(_component2['default']);

_component2['default'].registerComponent('LoadProgressBar', LoadProgressBar);
exports['default'] = LoadProgressBar;

},{"5":5,"81":81}],16:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _formatTime = _dereq_(84);

var _formatTime2 = _interopRequireDefault(_formatTime);

var _computedStyle = _dereq_(80);

var _computedStyle2 = _interopRequireDefault(_computedStyle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file mouse-time-display.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The Mouse Time Display component shows the time you will seek to
 * when hovering over the progress bar
 *
 * @extends Component
 */
var MouseTimeDisplay = function (_Component) {
  _inherits(MouseTimeDisplay, _Component);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function MouseTimeDisplay(player, options) {
    _classCallCheck(this, MouseTimeDisplay);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    if (options.playerOptions && options.playerOptions.controlBar && options.playerOptions.controlBar.progressControl && options.playerOptions.controlBar.progressControl.keepTooltipsInside) {
      _this.keepTooltipsInside = options.playerOptions.controlBar.progressControl.keepTooltipsInside;
    }

    if (_this.keepTooltipsInside) {
      _this.tooltip = Dom.createEl('div', { className: 'vjs-time-tooltip' });
      _this.el().appendChild(_this.tooltip);
      _this.addClass('vjs-keep-tooltips-inside');
    }

    _this.update(0, 0);

    player.on('ready', function () {
      _this.on(player.controlBar.progressControl.el(), 'mousemove', Fn.throttle(Fn.bind(_this, _this.handleMouseMove), 25));
    });
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  MouseTimeDisplay.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-mouse-display'
    });
  };

  /**
   * Handle the mouse move event on the `MouseTimeDisplay`.
   *
   * @param {EventTarget~Event} event
   *        The `mousemove` event that caused this to event to run.
   *
   * @listen mousemove
   */


  MouseTimeDisplay.prototype.handleMouseMove = function handleMouseMove(event) {
    var duration = this.player_.duration();
    var newTime = this.calculateDistance(event) * duration;
    var position = event.pageX - Dom.findElPosition(this.el().parentNode).left;

    this.update(newTime, position);
  };

  /**
   * Update the time and posistion of the `MouseTimeDisplay`.
   *
   * @param {number} newTime
   *        Time to change the `MouseTimeDisplay` to.
   *
   * @param {nubmer} position
   *        Postion from the left of the in pixels.
   */


  MouseTimeDisplay.prototype.update = function update(newTime, position) {
    var time = (0, _formatTime2['default'])(newTime, this.player_.duration());

    this.el().style.left = position + 'px';
    this.el().setAttribute('data-current-time', time);

    if (this.keepTooltipsInside) {
      var clampedPosition = this.clampPosition_(position);
      var difference = position - clampedPosition + 1;
      var tooltipWidth = parseFloat((0, _computedStyle2['default'])(this.tooltip, 'width'));
      var tooltipWidthHalf = tooltipWidth / 2;

      this.tooltip.innerHTML = time;
      this.tooltip.style.right = '-' + (tooltipWidthHalf - difference) + 'px';
    }
  };

  /**
   * Get the mouse pointers x coordinate in pixels.
   *
   * @param {EventTarget~Event} [event]
   *        The `mousemove` event that was passed to this function by
   *        {@link MouseTimeDisplay#handleMouseMove}
   *
   * @return {number}
   *         THe x position in pixels of the mouse pointer.
   */


  MouseTimeDisplay.prototype.calculateDistance = function calculateDistance(event) {
    return Dom.getPointerPosition(this.el().parentNode, event).x;
  };

  /**
   * This takes in a horizontal position for the bar and returns a clamped position.
   * Clamped position means that it will keep the position greater than half the width
   * of the tooltip and smaller than the player width minus half the width o the tooltip.
   * It will only clamp the position if `keepTooltipsInside` option is set.
   *
   * @param {number} position
   *        The position the bar wants to be
   *
   * @return {number}
   *         The (potentially) new clamped position.
   *
   * @private
   */


  MouseTimeDisplay.prototype.clampPosition_ = function clampPosition_(position) {
    if (!this.keepTooltipsInside) {
      return position;
    }

    var playerWidth = parseFloat((0, _computedStyle2['default'])(this.player().el(), 'width'));
    var tooltipWidth = parseFloat((0, _computedStyle2['default'])(this.tooltip, 'width'));
    var tooltipWidthHalf = tooltipWidth / 2;
    var actualPosition = position;

    if (position < tooltipWidthHalf) {
      actualPosition = Math.ceil(tooltipWidthHalf);
    } else if (position > playerWidth - tooltipWidthHalf) {
      actualPosition = Math.floor(playerWidth - tooltipWidthHalf);
    }

    return actualPosition;
  };

  return MouseTimeDisplay;
}(_component2['default']);

_component2['default'].registerComponent('MouseTimeDisplay', MouseTimeDisplay);
exports['default'] = MouseTimeDisplay;

},{"5":5,"80":80,"81":81,"83":83,"84":84}],17:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _formatTime = _dereq_(84);

var _formatTime2 = _interopRequireDefault(_formatTime);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file play-progress-bar.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Shows play progress
 *
 * @extends Component
 */
var PlayProgressBar = function (_Component) {
  _inherits(PlayProgressBar, _Component);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function PlayProgressBar(player, options) {
    _classCallCheck(this, PlayProgressBar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    _this.updateDataAttr();
    _this.on(player, 'timeupdate', _this.updateDataAttr);
    player.ready(Fn.bind(_this, _this.updateDataAttr));

    if (options.playerOptions && options.playerOptions.controlBar && options.playerOptions.controlBar.progressControl && options.playerOptions.controlBar.progressControl.keepTooltipsInside) {
      _this.keepTooltipsInside = options.playerOptions.controlBar.progressControl.keepTooltipsInside;
    }

    if (_this.keepTooltipsInside) {
      _this.addClass('vjs-keep-tooltips-inside');
    }
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  PlayProgressBar.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-play-progress vjs-slider-bar',
      innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
    });
  };

  /**
   * Update the data-current-time attribute on the `PlayProgressBar`.
   *
   * @param {EventTarget~Event} [event]
   *        The `timeupdate` event that caused this to run.
   *
   * @listens Player#timeupdate
   */


  PlayProgressBar.prototype.updateDataAttr = function updateDataAttr(event) {
    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();

    this.el_.setAttribute('data-current-time', (0, _formatTime2['default'])(time, this.player_.duration()));
  };

  return PlayProgressBar;
}(_component2['default']);

_component2['default'].registerComponent('PlayProgressBar', PlayProgressBar);
exports['default'] = PlayProgressBar;

},{"5":5,"83":83,"84":84}],18:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

_dereq_(19);

_dereq_(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file progress-control.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The Progress Control component contains the seek bar, load progress,
 * and play progress.
 *
 * @extends Component
 */
var ProgressControl = function (_Component) {
  _inherits(ProgressControl, _Component);

  function ProgressControl() {
    _classCallCheck(this, ProgressControl);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */
  ProgressControl.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-progress-control vjs-control'
    });
  };

  return ProgressControl;
}(_component2['default']);

/**
 * Default options for `ProgressControl`
 *
 * @type {Object}
 * @private
 */


ProgressControl.prototype.options_ = {
  children: ['seekBar']
};

_component2['default'].registerComponent('ProgressControl', ProgressControl);
exports['default'] = ProgressControl;

},{"16":16,"19":19,"5":5}],19:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _slider = _dereq_(57);

var _slider2 = _interopRequireDefault(_slider);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _formatTime = _dereq_(84);

var _formatTime2 = _interopRequireDefault(_formatTime);

var _computedStyle = _dereq_(80);

var _computedStyle2 = _interopRequireDefault(_computedStyle);

_dereq_(15);

_dereq_(17);

_dereq_(20);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file seek-bar.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Seek Bar and holder for the progress bars
 *
 * @extends Slider
 */
var SeekBar = function (_Slider) {
  _inherits(SeekBar, _Slider);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function SeekBar(player, options) {
    _classCallCheck(this, SeekBar);

    var _this = _possibleConstructorReturn(this, _Slider.call(this, player, options));

    _this.on(player, 'timeupdate', _this.updateProgress);
    _this.on(player, 'ended', _this.updateProgress);
    player.ready(Fn.bind(_this, _this.updateProgress));

    if (options.playerOptions && options.playerOptions.controlBar && options.playerOptions.controlBar.progressControl && options.playerOptions.controlBar.progressControl.keepTooltipsInside) {
      _this.keepTooltipsInside = options.playerOptions.controlBar.progressControl.keepTooltipsInside;
    }

    if (_this.keepTooltipsInside) {
      _this.tooltipProgressBar = _this.addChild('TooltipProgressBar');
    }
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  SeekBar.prototype.createEl = function createEl() {
    return _Slider.prototype.createEl.call(this, 'div', {
      className: 'vjs-progress-holder'
    }, {
      'aria-label': 'progress bar'
    });
  };

  /**
   * Update the seek bars tooltip and width.
   *
   * @param {EventTarget~Event} [event]
   *        The `timeupdate` or `ended` event that caused this to run.
   *
   * @listens Player#timeupdate
   * @listens Player#ended
   */


  SeekBar.prototype.updateProgress = function updateProgress(event) {
    this.updateAriaAttributes(this.el_);

    if (this.keepTooltipsInside) {
      this.updateAriaAttributes(this.tooltipProgressBar.el_);
      this.tooltipProgressBar.el_.style.width = this.bar.el_.style.width;

      var playerWidth = parseFloat((0, _computedStyle2['default'])(this.player().el(), 'width'));
      var tooltipWidth = parseFloat((0, _computedStyle2['default'])(this.tooltipProgressBar.tooltip, 'width'));
      var tooltipStyle = this.tooltipProgressBar.el().style;

      tooltipStyle.maxWidth = Math.floor(playerWidth - tooltipWidth / 2) + 'px';
      tooltipStyle.minWidth = Math.ceil(tooltipWidth / 2) + 'px';
      tooltipStyle.right = '-' + tooltipWidth / 2 + 'px';
    }
  };

  /**
   * Update ARIA accessibility attributes
   *
   * @param {Element} el
   *        The element to update with aria accessibility attributes.
   */


  SeekBar.prototype.updateAriaAttributes = function updateAriaAttributes(el) {
    // Allows for smooth scrubbing, when player can't keep up.
    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();

    // machine readable value of progress bar (percentage complete)
    el.setAttribute('aria-valuenow', (this.getPercent() * 100).toFixed(2));
    // human readable value of progress bar (time complete)
    el.setAttribute('aria-valuetext', (0, _formatTime2['default'])(time, this.player_.duration()));
  };

  /**
   * Get percentage of video played
   *
   * @return {number}
   *         The percentage played
   */


  SeekBar.prototype.getPercent = function getPercent() {
    var percent = this.player_.currentTime() / this.player_.duration();

    return percent >= 1 ? 1 : percent;
  };

  /**
   * Handle mouse down on seek bar
   *
   * @param {EventTarget~Event} event
   *        The `mousedown` event that caused this to run.
   *
   * @listens mousedown
   */


  SeekBar.prototype.handleMouseDown = function handleMouseDown(event) {
    this.player_.scrubbing(true);

    this.videoWasPlaying = !this.player_.paused();
    this.player_.pause();

    _Slider.prototype.handleMouseDown.call(this, event);
  };

  /**
   * Handle mouse move on seek bar
   *
   * @param {EventTarget~Event} event
   *        The `mousemove` event that caused this to run.
   *
   * @listens mousemove
   */


  SeekBar.prototype.handleMouseMove = function handleMouseMove(event) {
    var newTime = this.calculateDistance(event) * this.player_.duration();

    // Don't let video end while scrubbing.
    if (newTime === this.player_.duration()) {
      newTime = newTime - 0.1;
    }

    // Set new time (tell player to seek to new time)
    this.player_.currentTime(newTime);
  };

  /**
   * Handle mouse up on seek bar
   *
   * @param {EventTarget~Event} event
   *        The `mouseup` event that caused this to run.
   *
   * @listens mouseup
   */


  SeekBar.prototype.handleMouseUp = function handleMouseUp(event) {
    _Slider.prototype.handleMouseUp.call(this, event);

    this.player_.scrubbing(false);
    if (this.videoWasPlaying) {
      this.player_.play();
    }
  };

  /**
   * Move more quickly fast forward for keyboard-only users
   */


  SeekBar.prototype.stepForward = function stepForward() {
    // more quickly fast forward for keyboard-only users
    this.player_.currentTime(this.player_.currentTime() + 5);
  };

  /**
   * Move more quickly rewind for keyboard-only users
   */


  SeekBar.prototype.stepBack = function stepBack() {
    // more quickly rewind for keyboard-only users
    this.player_.currentTime(this.player_.currentTime() - 5);
  };

  return SeekBar;
}(_slider2['default']);

/**
 * Default options for the `SeekBar`
 *
 * @type {Object}
 * @private
 */


SeekBar.prototype.options_ = {
  children: ['loadProgressBar', 'mouseTimeDisplay', 'playProgressBar'],
  barName: 'playProgressBar'
};

/**
 * Call the update event for this Slider when this event happens on the player.
 *
 * @type {string}
 */
SeekBar.prototype.playerEvent = 'timeupdate';

_component2['default'].registerComponent('SeekBar', SeekBar);
exports['default'] = SeekBar;

},{"15":15,"17":17,"20":20,"5":5,"57":57,"80":80,"83":83,"84":84}],20:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _formatTime = _dereq_(84);

var _formatTime2 = _interopRequireDefault(_formatTime);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file play-progress-bar.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Shows play progress
 *
 * @extends Component
 */
var TooltipProgressBar = function (_Component) {
  _inherits(TooltipProgressBar, _Component);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function TooltipProgressBar(player, options) {
    _classCallCheck(this, TooltipProgressBar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    _this.updateDataAttr();
    _this.on(player, 'timeupdate', _this.updateDataAttr);
    player.ready(Fn.bind(_this, _this.updateDataAttr));
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  TooltipProgressBar.prototype.createEl = function createEl() {
    var el = _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-tooltip-progress-bar vjs-slider-bar',
      innerHTML: '<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
    });

    this.tooltip = el.querySelector('.vjs-time-tooltip');

    return el;
  };

  /**
   * Updatet the data-current-time attribute for TooltipProgressBar
   *
   * @param {EventTarget~Event} [event]
   *        The `timeupdate` event that caused this function to run.
   *
   * @listens Player#timeupdate
   */


  TooltipProgressBar.prototype.updateDataAttr = function updateDataAttr(event) {
    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
    var formattedTime = (0, _formatTime2['default'])(time, this.player_.duration());

    this.el_.setAttribute('data-current-time', formattedTime);
    this.tooltip.innerHTML = formattedTime;
  };

  return TooltipProgressBar;
}(_component2['default']);

_component2['default'].registerComponent('TooltipProgressBar', TooltipProgressBar);
exports['default'] = TooltipProgressBar;

},{"5":5,"83":83,"84":84}],21:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _spacer = _dereq_(22);

var _spacer2 = _interopRequireDefault(_spacer);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file custom-control-spacer.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Spacer specifically meant to be used as an insertion point for new plugins, etc.
 *
 * @extends Spacer
 */
var CustomControlSpacer = function (_Spacer) {
  _inherits(CustomControlSpacer, _Spacer);

  function CustomControlSpacer() {
    _classCallCheck(this, CustomControlSpacer);

    return _possibleConstructorReturn(this, _Spacer.apply(this, arguments));
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */
  CustomControlSpacer.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-custom-control-spacer ' + _Spacer.prototype.buildCSSClass.call(this);
  };

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  CustomControlSpacer.prototype.createEl = function createEl() {
    var el = _Spacer.prototype.createEl.call(this, {
      className: this.buildCSSClass()
    });

    // No-flex/table-cell mode requires there be some content
    // in the cell to fill the remaining space of the table.
    el.innerHTML = '&nbsp;';
    return el;
  };

  return CustomControlSpacer;
}(_spacer2['default']);

_component2['default'].registerComponent('CustomControlSpacer', CustomControlSpacer);
exports['default'] = CustomControlSpacer;

},{"22":22,"5":5}],22:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file spacer.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Just an empty spacer element that can be used as an append point for plugins, etc.
 * Also can be used to create space between elements when necessary.
 *
 * @extends Component
 */
var Spacer = function (_Component) {
  _inherits(Spacer, _Component);

  function Spacer() {
    _classCallCheck(this, Spacer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */
  Spacer.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-spacer ' + _Component.prototype.buildCSSClass.call(this);
  };

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  Spacer.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: this.buildCSSClass()
    });
  };

  return Spacer;
}(_component2['default']);

_component2['default'].registerComponent('Spacer', Spacer);

exports['default'] = Spacer;

},{"5":5}],23:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _textTrackMenuItem = _dereq_(31);

var _textTrackMenuItem2 = _interopRequireDefault(_textTrackMenuItem);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file caption-settings-menu-item.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The menu item for caption track settings menu
 *
 * @extends TextTrackMenuItem
 */
var CaptionSettingsMenuItem = function (_TextTrackMenuItem) {
  _inherits(CaptionSettingsMenuItem, _TextTrackMenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function CaptionSettingsMenuItem(player, options) {
    _classCallCheck(this, CaptionSettingsMenuItem);

    options.track = {
      player: player,
      kind: options.kind,
      label: options.kind + ' settings',
      selectable: false,
      'default': false,
      mode: 'disabled'
    };

    // CaptionSettingsMenuItem has no concept of 'selected'
    options.selectable = false;

    var _this = _possibleConstructorReturn(this, _TextTrackMenuItem.call(this, player, options));

    _this.addClass('vjs-texttrack-settings');
    _this.controlText(', opens ' + options.kind + ' settings dialog');
    return _this;
  }

  /**
   * This gets called when an `CaptionSettingsMenuItem` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  CaptionSettingsMenuItem.prototype.handleClick = function handleClick(event) {
    this.player().getChild('textTrackSettings').show();
    this.player().getChild('textTrackSettings').el_.focus();
  };

  return CaptionSettingsMenuItem;
}(_textTrackMenuItem2['default']);

_component2['default'].registerComponent('CaptionSettingsMenuItem', CaptionSettingsMenuItem);
exports['default'] = CaptionSettingsMenuItem;

},{"31":31,"5":5}],24:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _textTrackButton = _dereq_(30);

var _textTrackButton2 = _interopRequireDefault(_textTrackButton);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _captionSettingsMenuItem = _dereq_(23);

var _captionSettingsMenuItem2 = _interopRequireDefault(_captionSettingsMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file captions-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The button component for toggling and selecting captions
 *
 * @extends TextTrackButton
 */
var CaptionsButton = function (_TextTrackButton) {
  _inherits(CaptionsButton, _TextTrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} [ready]
   *        The function to call when this component is ready.
   */
  function CaptionsButton(player, options, ready) {
    _classCallCheck(this, CaptionsButton);

    var _this = _possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));

    _this.el_.setAttribute('aria-label', 'Captions Menu');
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  CaptionsButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-captions-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  /**
   * Create caption menu items
   *
   * @return {CaptionSettingsMenuItem[]}
   *         The array of current menu items.
   */


  CaptionsButton.prototype.createItems = function createItems() {
    var items = [];

    if (!(this.player().tech_ && this.player().tech_.featuresNativeTextTracks)) {
      items.push(new _captionSettingsMenuItem2['default'](this.player_, { kind: this.kind_ }));

      this.hideThreshold_ += 1;
    }

    return _TextTrackButton.prototype.createItems.call(this, items);
  };

  return CaptionsButton;
}(_textTrackButton2['default']);

/**
 * `kind` of TextTrack to look for to associate it with this menu.
 *
 * @type {string}
 * @private
 */


CaptionsButton.prototype.kind_ = 'captions';

/**
 * The text that should display over the `CaptionsButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
CaptionsButton.prototype.controlText_ = 'Captions';

_component2['default'].registerComponent('CaptionsButton', CaptionsButton);
exports['default'] = CaptionsButton;

},{"23":23,"30":30,"5":5}],25:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _textTrackButton = _dereq_(30);

var _textTrackButton2 = _interopRequireDefault(_textTrackButton);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _chaptersTrackMenuItem = _dereq_(26);

var _chaptersTrackMenuItem2 = _interopRequireDefault(_chaptersTrackMenuItem);

var _toTitleCase = _dereq_(91);

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file chapters-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The button component for toggling and selecting chapters
 * Chapters act much differently than other text tracks
 * Cues are navigation vs. other tracks of alternative languages
 *
 * @extends TextTrackButton
 */
var ChaptersButton = function (_TextTrackButton) {
  _inherits(ChaptersButton, _TextTrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} [ready]
   *        The function to call when this function is ready.
   */
  function ChaptersButton(player, options, ready) {
    _classCallCheck(this, ChaptersButton);

    var _this = _possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));

    _this.el_.setAttribute('aria-label', 'Chapters Menu');
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  ChaptersButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-chapters-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  /**
   * Update the menu based on the current state of its items.
   *
   * @param {EventTarget~Event} [event]
   *        An event that triggered this function to run.
   *
   * @listens TextTrackList#addtrack
   * @listens TextTrackList#removetrack
   * @listens TextTrackList#change
   */


  ChaptersButton.prototype.update = function update(event) {
    if (!this.track_ || event && (event.type === 'addtrack' || event.type === 'removetrack')) {
      this.setTrack(this.findChaptersTrack());
    }
    _TextTrackButton.prototype.update.call(this);
  };

  /**
   * Set the currently selected track for the chapters button.
   *
   * @param {TextTrack} track
   *        The new track to select. Nothing will change if this is the currently selected
   *        track.
   */


  ChaptersButton.prototype.setTrack = function setTrack(track) {
    if (this.track_ === track) {
      return;
    }

    if (!this.updateHandler_) {
      this.updateHandler_ = this.update.bind(this);
    }

    // here this.track_ refers to the old track instance
    if (this.track_) {
      var remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);

      if (remoteTextTrackEl) {
        remoteTextTrackEl.removeEventListener('load', this.updateHandler_);
      }

      this.track_ = null;
    }

    this.track_ = track;

    // here this.track_ refers to the new track instance
    if (this.track_) {
      this.track_.mode = 'hidden';

      var _remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);

      if (_remoteTextTrackEl) {
        _remoteTextTrackEl.addEventListener('load', this.updateHandler_);
      }
    }
  };

  /**
   * Find the track object that is currently in use by this ChaptersButton
   *
   * @return {TextTrack|undefined}
   *         The current track or undefined if none was found.
   */


  ChaptersButton.prototype.findChaptersTrack = function findChaptersTrack() {
    var tracks = this.player_.textTracks() || [];

    for (var i = tracks.length - 1; i >= 0; i--) {
      // We will always choose the last track as our chaptersTrack
      var track = tracks[i];

      if (track.kind === this.kind_) {
        return track;
      }
    }
  };

  /**
   * Get the caption for the ChaptersButton based on the track label. This will also
   * use the current tracks localized kind as a fallback if a label does not exist.
   *
   * @return {string}
   *         The tracks current label or the localized track kind.
   */


  ChaptersButton.prototype.getMenuCaption = function getMenuCaption() {
    if (this.track_ && this.track_.label) {
      return this.track_.label;
    }
    return this.localize((0, _toTitleCase2['default'])(this.kind_));
  };

  /**
   * Create menu from chapter track
   *
   * @return {Menu}
   *         New menu for the chapter buttons
   */


  ChaptersButton.prototype.createMenu = function createMenu() {
    this.options_.title = this.getMenuCaption();
    return _TextTrackButton.prototype.createMenu.call(this);
  };

  /**
   * Create a menu item for each text track
   *
   * @return {TextTrackMenuItem[]}
   *         Array of menu items
   */


  ChaptersButton.prototype.createItems = function createItems() {
    var items = [];

    if (!this.track_) {
      return items;
    }

    var cues = this.track_.cues;

    if (!cues) {
      return items;
    }

    for (var i = 0, l = cues.length; i < l; i++) {
      var cue = cues[i];
      var mi = new _chaptersTrackMenuItem2['default'](this.player_, { track: this.track_, cue: cue });

      items.push(mi);
    }

    return items;
  };

  return ChaptersButton;
}(_textTrackButton2['default']);

/**
 * `kind` of TextTrack to look for to associate it with this menu.
 *
 * @type {string}
 * @private
 */


ChaptersButton.prototype.kind_ = 'chapters';

/**
 * The text that should display over the `ChaptersButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
ChaptersButton.prototype.controlText_ = 'Chapters';

_component2['default'].registerComponent('ChaptersButton', ChaptersButton);
exports['default'] = ChaptersButton;

},{"26":26,"30":30,"5":5,"91":91}],26:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _menuItem = _dereq_(48);

var _menuItem2 = _interopRequireDefault(_menuItem);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file chapters-track-menu-item.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The chapter track menu item
 *
 * @extends MenuItem
 */
var ChaptersTrackMenuItem = function (_MenuItem) {
  _inherits(ChaptersTrackMenuItem, _MenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function ChaptersTrackMenuItem(player, options) {
    _classCallCheck(this, ChaptersTrackMenuItem);

    var track = options.track;
    var cue = options.cue;
    var currentTime = player.currentTime();

    // Modify options for parent MenuItem class's init.
    options.selectable = true;
    options.label = cue.text;
    options.selected = cue.startTime <= currentTime && currentTime < cue.endTime;

    var _this = _possibleConstructorReturn(this, _MenuItem.call(this, player, options));

    _this.track = track;
    _this.cue = cue;
    track.addEventListener('cuechange', Fn.bind(_this, _this.update));
    return _this;
  }

  /**
   * This gets called when an `ChaptersTrackMenuItem` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  ChaptersTrackMenuItem.prototype.handleClick = function handleClick(event) {
    _MenuItem.prototype.handleClick.call(this);
    this.player_.currentTime(this.cue.startTime);
    this.update(this.cue.startTime);
  };

  /**
   * Update chapter menu item
   *
   * @param {EventTarget~Event} [event]
   *        The `cuechange` event that caused this function to run.
   *
   * @listens TextTrack#cuechange
   */


  ChaptersTrackMenuItem.prototype.update = function update(event) {
    var cue = this.cue;
    var currentTime = this.player_.currentTime();

    // vjs.log(currentTime, cue.startTime);
    this.selected(cue.startTime <= currentTime && currentTime < cue.endTime);
  };

  return ChaptersTrackMenuItem;
}(_menuItem2['default']);

_component2['default'].registerComponent('ChaptersTrackMenuItem', ChaptersTrackMenuItem);
exports['default'] = ChaptersTrackMenuItem;

},{"48":48,"5":5,"83":83}],27:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _textTrackButton = _dereq_(30);

var _textTrackButton2 = _interopRequireDefault(_textTrackButton);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file descriptions-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The button component for toggling and selecting descriptions
 *
 * @extends TextTrackButton
 */
var DescriptionsButton = function (_TextTrackButton) {
  _inherits(DescriptionsButton, _TextTrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} [ready]
   *        The function to call when this component is ready.
   */
  function DescriptionsButton(player, options, ready) {
    _classCallCheck(this, DescriptionsButton);

    var _this = _possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));

    _this.el_.setAttribute('aria-label', 'Descriptions Menu');

    var tracks = player.textTracks();

    if (tracks) {
      var changeHandler = Fn.bind(_this, _this.handleTracksChange);

      tracks.addEventListener('change', changeHandler);
      _this.on('dispose', function () {
        tracks.removeEventListener('change', changeHandler);
      });
    }
    return _this;
  }

  /**
   * Handle text track change
   *
   * @param {EventTarget~Event} event
   *        The event that caused this function to run
   *
   * @listens TextTrackList#change
   */


  DescriptionsButton.prototype.handleTracksChange = function handleTracksChange(event) {
    var tracks = this.player().textTracks();
    var disabled = false;

    // Check whether a track of a different kind is showing
    for (var i = 0, l = tracks.length; i < l; i++) {
      var track = tracks[i];

      if (track.kind !== this.kind_ && track.mode === 'showing') {
        disabled = true;
        break;
      }
    }

    // If another track is showing, disable this menu button
    if (disabled) {
      this.disable();
    } else {
      this.enable();
    }
  };

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  DescriptionsButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-descriptions-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  return DescriptionsButton;
}(_textTrackButton2['default']);

/**
 * `kind` of TextTrack to look for to associate it with this menu.
 *
 * @type {string}
 * @private
 */


DescriptionsButton.prototype.kind_ = 'descriptions';

/**
 * The text that should display over the `DescriptionsButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
DescriptionsButton.prototype.controlText_ = 'Descriptions';

_component2['default'].registerComponent('DescriptionsButton', DescriptionsButton);
exports['default'] = DescriptionsButton;

},{"30":30,"5":5,"83":83}],28:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _textTrackMenuItem = _dereq_(31);

var _textTrackMenuItem2 = _interopRequireDefault(_textTrackMenuItem);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file off-text-track-menu-item.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * A special menu item for turning of a specific type of text track
 *
 * @extends TextTrackMenuItem
 */
var OffTextTrackMenuItem = function (_TextTrackMenuItem) {
  _inherits(OffTextTrackMenuItem, _TextTrackMenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function OffTextTrackMenuItem(player, options) {
    _classCallCheck(this, OffTextTrackMenuItem);

    // Create pseudo track info
    // Requires options['kind']
    options.track = {
      player: player,
      kind: options.kind,
      label: options.kind + ' off',
      'default': false,
      mode: 'disabled'
    };

    // MenuItem is selectable
    options.selectable = true;

    var _this = _possibleConstructorReturn(this, _TextTrackMenuItem.call(this, player, options));

    _this.selected(true);
    return _this;
  }

  /**
   * Handle text track change
   *
   * @param {EventTarget~Event} event
   *        The event that caused this function to run
   */


  OffTextTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
    var tracks = this.player().textTracks();
    var selected = true;

    for (var i = 0, l = tracks.length; i < l; i++) {
      var track = tracks[i];

      if (track.kind === this.track.kind && track.mode === 'showing') {
        selected = false;
        break;
      }
    }

    this.selected(selected);
  };

  return OffTextTrackMenuItem;
}(_textTrackMenuItem2['default']);

_component2['default'].registerComponent('OffTextTrackMenuItem', OffTextTrackMenuItem);
exports['default'] = OffTextTrackMenuItem;

},{"31":31,"5":5}],29:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _textTrackButton = _dereq_(30);

var _textTrackButton2 = _interopRequireDefault(_textTrackButton);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file subtitles-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The button component for toggling and selecting subtitles
 *
 * @extends TextTrackButton
 */
var SubtitlesButton = function (_TextTrackButton) {
  _inherits(SubtitlesButton, _TextTrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} [ready]
   *        The function to call when this component is ready.
   */
  function SubtitlesButton(player, options, ready) {
    _classCallCheck(this, SubtitlesButton);

    var _this = _possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));

    _this.el_.setAttribute('aria-label', 'Subtitles Menu');
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  SubtitlesButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-subtitles-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  return SubtitlesButton;
}(_textTrackButton2['default']);

/**
 * `kind` of TextTrack to look for to associate it with this menu.
 *
 * @type {string}
 * @private
 */


SubtitlesButton.prototype.kind_ = 'subtitles';

/**
 * The text that should display over the `SubtitlesButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
SubtitlesButton.prototype.controlText_ = 'Subtitles';

_component2['default'].registerComponent('SubtitlesButton', SubtitlesButton);
exports['default'] = SubtitlesButton;

},{"30":30,"5":5}],30:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _trackButton = _dereq_(36);

var _trackButton2 = _interopRequireDefault(_trackButton);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _textTrackMenuItem = _dereq_(31);

var _textTrackMenuItem2 = _interopRequireDefault(_textTrackMenuItem);

var _offTextTrackMenuItem = _dereq_(28);

var _offTextTrackMenuItem2 = _interopRequireDefault(_offTextTrackMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file text-track-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The base class for buttons that toggle specific text track types (e.g. subtitles)
 *
 * @extends MenuButton
 */
var TextTrackButton = function (_TrackButton) {
  _inherits(TextTrackButton, _TrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options={}]
   *        The key/value store of player options.
   */
  function TextTrackButton(player) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, TextTrackButton);

    options.tracks = player.textTracks();

    return _possibleConstructorReturn(this, _TrackButton.call(this, player, options));
  }

  /**
   * Create a menu item for each text track
   *
   * @param {TextTrackMenuItem[]} [items=[]]
   *        Existing array of items to use during creation
   *
   * @return {TextTrackMenuItem[]}
   *         Array of menu items that were created
   */


  TextTrackButton.prototype.createItems = function createItems() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    // Add an OFF menu item to turn all tracks off
    items.push(new _offTextTrackMenuItem2['default'](this.player_, { kind: this.kind_ }));
    this.hideThreshold_ += 1;

    var tracks = this.player_.textTracks();

    if (!tracks) {
      return items;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      // only add tracks that are of the appropriate kind and have a label
      if (track.kind === this.kind_) {
        items.push(new _textTrackMenuItem2['default'](this.player_, {
          track: track,
          // MenuItem is selectable
          selectable: true
        }));
      }
    }

    return items;
  };

  return TextTrackButton;
}(_trackButton2['default']);

_component2['default'].registerComponent('TextTrackButton', TextTrackButton);
exports['default'] = TextTrackButton;

},{"28":28,"31":31,"36":36,"5":5}],31:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _menuItem = _dereq_(48);

var _menuItem2 = _interopRequireDefault(_menuItem);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _window = _dereq_(95);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(94);

var _document2 = _interopRequireDefault(_document);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file text-track-menu-item.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The specific menu item type for selecting a language within a text track kind
 *
 * @extends MenuItem
 */
var TextTrackMenuItem = function (_MenuItem) {
  _inherits(TextTrackMenuItem, _MenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function TextTrackMenuItem(player, options) {
    _classCallCheck(this, TextTrackMenuItem);

    var track = options.track;
    var tracks = player.textTracks();

    // Modify options for parent MenuItem class's init.
    options.label = track.label || track.language || 'Unknown';
    options.selected = track['default'] || track.mode === 'showing';

    var _this = _possibleConstructorReturn(this, _MenuItem.call(this, player, options));

    _this.track = track;

    if (tracks) {
      var changeHandler = Fn.bind(_this, _this.handleTracksChange);

      player.on(['loadstart', 'texttrackchange'], changeHandler);
      tracks.addEventListener('change', changeHandler);
      _this.on('dispose', function () {
        tracks.removeEventListener('change', changeHandler);
      });
    }

    // iOS7 doesn't dispatch change events to TextTrackLists when an
    // associated track's mode changes. Without something like
    // Object.observe() (also not present on iOS7), it's not
    // possible to detect changes to the mode attribute and polyfill
    // the change event. As a poor substitute, we manually dispatch
    // change events whenever the controls modify the mode.
    if (tracks && tracks.onchange === undefined) {
      var event = void 0;

      _this.on(['tap', 'click'], function () {
        if (_typeof(_window2['default'].Event) !== 'object') {
          // Android 2.3 throws an Illegal Constructor error for window.Event
          try {
            event = new _window2['default'].Event('change');
          } catch (err) {
            // continue regardless of error
          }
        }

        if (!event) {
          event = _document2['default'].createEvent('Event');
          event.initEvent('change', true, true);
        }

        tracks.dispatchEvent(event);
      });
    }
    return _this;
  }

  /**
   * This gets called when an `TextTrackMenuItem` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} event
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  TextTrackMenuItem.prototype.handleClick = function handleClick(event) {
    var kind = this.track.kind;
    var tracks = this.player_.textTracks();

    _MenuItem.prototype.handleClick.call(this, event);

    if (!tracks) {
      return;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      if (track.kind !== kind) {
        continue;
      }

      if (track === this.track) {
        track.mode = 'showing';
      } else {
        track.mode = 'disabled';
      }
    }
  };

  /**
   * Handle text track list change
   *
   * @param {EventTarget~Event} event
   *        The `change` event that caused this function to be called.
   *
   * @listens TextTrackList#change
   */


  TextTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
    this.selected(this.track.mode === 'showing');
  };

  return TextTrackMenuItem;
}(_menuItem2['default']);

_component2['default'].registerComponent('TextTrackMenuItem', TextTrackMenuItem);
exports['default'] = TextTrackMenuItem;

},{"48":48,"5":5,"83":83,"94":94,"95":95}],32:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

var _formatTime = _dereq_(84);

var _formatTime2 = _interopRequireDefault(_formatTime);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file current-time-display.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Displays the current time
 *
 * @extends Component
 */
var CurrentTimeDisplay = function (_Component) {
  _inherits(CurrentTimeDisplay, _Component);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function CurrentTimeDisplay(player, options) {
    _classCallCheck(this, CurrentTimeDisplay);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    _this.on(player, 'timeupdate', _this.updateContent);
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  CurrentTimeDisplay.prototype.createEl = function createEl() {
    var el = _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-current-time vjs-time-control vjs-control'
    });

    this.contentEl_ = Dom.createEl('div', {
      className: 'vjs-current-time-display',
      // label the current time for screen reader users
      innerHTML: '<span class="vjs-control-text">Current Time </span>' + '0:00'
    }, {
      // tell screen readers not to automatically read the time as it changes
      'aria-live': 'off'
    });

    el.appendChild(this.contentEl_);
    return el;
  };

  /**
   * Update current time display
   *
   * @param {EventTarget~Event} [event]
   *        The `timeupdate` event that caused this function to run.
   *
   * @listens Player#timeupdate
   */


  CurrentTimeDisplay.prototype.updateContent = function updateContent(event) {
    // Allows for smooth scrubbing, when player can't keep up.
    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
    var localizedText = this.localize('Current Time');
    var formattedTime = (0, _formatTime2['default'])(time, this.player_.duration());

    if (formattedTime !== this.formattedTime_) {
      this.formattedTime_ = formattedTime;
      this.contentEl_.innerHTML = '<span class="vjs-control-text">' + localizedText + '</span> ' + formattedTime;
    }
  };

  return CurrentTimeDisplay;
}(_component2['default']);

_component2['default'].registerComponent('CurrentTimeDisplay', CurrentTimeDisplay);
exports['default'] = CurrentTimeDisplay;

},{"5":5,"81":81,"84":84}],33:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

var _formatTime = _dereq_(84);

var _formatTime2 = _interopRequireDefault(_formatTime);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file duration-display.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Displays the duration
 *
 * @extends Component
 */
var DurationDisplay = function (_Component) {
  _inherits(DurationDisplay, _Component);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function DurationDisplay(player, options) {
    _classCallCheck(this, DurationDisplay);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    _this.on(player, 'durationchange', _this.updateContent);

    // Also listen for timeupdate and loadedmetadata because removing those
    // listeners could have broken dependent applications/libraries. These
    // can likely be removed for 6.0.
    _this.on(player, 'timeupdate', _this.updateContent);
    _this.on(player, 'loadedmetadata', _this.updateContent);
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  DurationDisplay.prototype.createEl = function createEl() {
    var el = _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-duration vjs-time-control vjs-control'
    });

    this.contentEl_ = Dom.createEl('div', {
      className: 'vjs-duration-display',
      // label the duration time for screen reader users
      innerHTML: '<span class="vjs-control-text">' + this.localize('Duration Time') + '</span> 0:00'
    }, {
      // tell screen readers not to automatically read the time as it changes
      'aria-live': 'off'
    });

    el.appendChild(this.contentEl_);
    return el;
  };

  /**
   * Update duration time display.
   *
   * @param {EventTarget~Event} [event]
   *        The `durationchange`, `timeupdate`, or `loadedmetadata` event that caused
   *        this function to be called.
   *
   * @listens Player#durationchange
   * @listens Player#timeupdate
   * @listens Player#loadedmetadata
   */


  DurationDisplay.prototype.updateContent = function updateContent(event) {
    var duration = this.player_.duration();

    if (duration && this.duration_ !== duration) {
      this.duration_ = duration;
      var localizedText = this.localize('Duration Time');
      var formattedTime = (0, _formatTime2['default'])(duration);

      // label the duration time for screen reader users
      this.contentEl_.innerHTML = '<span class="vjs-control-text">' + localizedText + '</span> ' + formattedTime;
    }
  };

  return DurationDisplay;
}(_component2['default']);

_component2['default'].registerComponent('DurationDisplay', DurationDisplay);
exports['default'] = DurationDisplay;

},{"5":5,"81":81,"84":84}],34:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

var _formatTime = _dereq_(84);

var _formatTime2 = _interopRequireDefault(_formatTime);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file remaining-time-display.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Displays the time left in the video
 *
 * @extends Component
 */
var RemainingTimeDisplay = function (_Component) {
  _inherits(RemainingTimeDisplay, _Component);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function RemainingTimeDisplay(player, options) {
    _classCallCheck(this, RemainingTimeDisplay);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    _this.on(player, 'timeupdate', _this.updateContent);
    _this.on(player, 'durationchange', _this.updateContent);
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  RemainingTimeDisplay.prototype.createEl = function createEl() {
    var el = _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-remaining-time vjs-time-control vjs-control'
    });

    this.contentEl_ = Dom.createEl('div', {
      className: 'vjs-remaining-time-display',
      // label the remaining time for screen reader users
      innerHTML: '<span class="vjs-control-text">' + this.localize('Remaining Time') + '</span> -0:00'
    }, {
      // tell screen readers not to automatically read the time as it changes
      'aria-live': 'off'
    });

    el.appendChild(this.contentEl_);
    return el;
  };

  /**
   * Update remaining time display.
   *
   * @param {EventTarget~Event} [event]
   *        The `timeupdate` or `durationchange` event that caused this to run.
   *
   * @listens Player#timeupdate
   * @listens Player#durationchange
   */


  RemainingTimeDisplay.prototype.updateContent = function updateContent(event) {
    if (this.player_.duration()) {
      var localizedText = this.localize('Remaining Time');
      var formattedTime = (0, _formatTime2['default'])(this.player_.remainingTime());

      if (formattedTime !== this.formattedTime_) {
        this.formattedTime_ = formattedTime;
        this.contentEl_.innerHTML = '<span class="vjs-control-text">' + localizedText + '</span> -' + formattedTime;
      }
    }

    // Allows for smooth scrubbing, when player can't keep up.
    // var time = (this.player_.scrubbing()) ? this.player_.getCache().currentTime : this.player_.currentTime();
    // this.contentEl_.innerHTML = vjs.formatTime(time, this.player_.duration());
  };

  return RemainingTimeDisplay;
}(_component2['default']);

_component2['default'].registerComponent('RemainingTimeDisplay', RemainingTimeDisplay);
exports['default'] = RemainingTimeDisplay;

},{"5":5,"81":81,"84":84}],35:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file time-divider.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The separator between the current time and duration.
 * Can be hidden if it's not needed in the design.
 *
 * @extends Component
 */
var TimeDivider = function (_Component) {
  _inherits(TimeDivider, _Component);

  function TimeDivider() {
    _classCallCheck(this, TimeDivider);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   *         The element that was created.
   */
  TimeDivider.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-time-control vjs-time-divider',
      innerHTML: '<div><span>/</span></div>'
    });
  };

  return TimeDivider;
}(_component2['default']);

_component2['default'].registerComponent('TimeDivider', TimeDivider);
exports['default'] = TimeDivider;

},{"5":5}],36:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _menuButton = _dereq_(47);

var _menuButton2 = _interopRequireDefault(_menuButton);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file track-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The base class for buttons that toggle specific  track types (e.g. subtitles).
 *
 * @extends MenuButton
 */
var TrackButton = function (_MenuButton) {
  _inherits(TrackButton, _MenuButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function TrackButton(player, options) {
    _classCallCheck(this, TrackButton);

    var tracks = options.tracks;

    var _this = _possibleConstructorReturn(this, _MenuButton.call(this, player, options));

    if (_this.items.length <= 1) {
      _this.hide();
    }

    if (!tracks) {
      return _possibleConstructorReturn(_this);
    }

    var updateHandler = Fn.bind(_this, _this.update);

    tracks.addEventListener('removetrack', updateHandler);
    tracks.addEventListener('addtrack', updateHandler);

    _this.player_.on('dispose', function () {
      tracks.removeEventListener('removetrack', updateHandler);
      tracks.removeEventListener('addtrack', updateHandler);
    });
    return _this;
  }

  return TrackButton;
}(_menuButton2['default']);

_component2['default'].registerComponent('TrackButton', TrackButton);
exports['default'] = TrackButton;

},{"47":47,"5":5,"83":83}],37:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _slider = _dereq_(57);

var _slider2 = _interopRequireDefault(_slider);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

_dereq_(39);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file volume-bar.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// Required children


/**
 * The bar that contains the volume level and can be clicked on to adjust the level
 *
 * @extends Slider
 */
var VolumeBar = function (_Slider) {
  _inherits(VolumeBar, _Slider);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function VolumeBar(player, options) {
    _classCallCheck(this, VolumeBar);

    var _this = _possibleConstructorReturn(this, _Slider.call(this, player, options));

    _this.on(player, 'volumechange', _this.updateARIAAttributes);
    player.ready(Fn.bind(_this, _this.updateARIAAttributes));
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  VolumeBar.prototype.createEl = function createEl() {
    return _Slider.prototype.createEl.call(this, 'div', {
      className: 'vjs-volume-bar vjs-slider-bar'
    }, {
      'aria-label': 'volume level'
    });
  };

  /**
   * Handle movement events on the {@link VolumeMenuButton}.
   *
   * @param {EventTarget~Event} event
   *        The event that caused this function to run.
   *
   * @listens mousemove
   */


  VolumeBar.prototype.handleMouseMove = function handleMouseMove(event) {
    this.checkMuted();
    this.player_.volume(this.calculateDistance(event));
  };

  /**
   * If the player is muted unmute it.
   */


  VolumeBar.prototype.checkMuted = function checkMuted() {
    if (this.player_.muted()) {
      this.player_.muted(false);
    }
  };

  /**
   * Get percent of volume level
   *
   * @return {number}
   *         Volume level percent as a decimal number.
   */


  VolumeBar.prototype.getPercent = function getPercent() {
    if (this.player_.muted()) {
      return 0;
    }
    return this.player_.volume();
  };

  /**
   * Increase volume level for keyboard users
   */


  VolumeBar.prototype.stepForward = function stepForward() {
    this.checkMuted();
    this.player_.volume(this.player_.volume() + 0.1);
  };

  /**
   * Decrease volume level for keyboard users
   */


  VolumeBar.prototype.stepBack = function stepBack() {
    this.checkMuted();
    this.player_.volume(this.player_.volume() - 0.1);
  };

  /**
   * Update ARIA accessibility attributes
   *
   * @param {EventTarget~Event} [event]
   *        The `volumechange` event that caused this function to run.
   *
   * @listens Player#volumechange
   */


  VolumeBar.prototype.updateARIAAttributes = function updateARIAAttributes(event) {
    // Current value of volume bar as a percentage
    var volume = (this.player_.volume() * 100).toFixed(2);

    this.el_.setAttribute('aria-valuenow', volume);
    this.el_.setAttribute('aria-valuetext', volume + '%');
  };

  return VolumeBar;
}(_slider2['default']);

/**
 * Default options for the `VolumeBar`
 *
 * @type {Object}
 * @private
 */


VolumeBar.prototype.options_ = {
  children: ['volumeLevel'],
  barName: 'volumeLevel'
};

/**
 * Call the update event for this Slider when this event happens on the player.
 *
 * @type {string}
 */
VolumeBar.prototype.playerEvent = 'volumechange';

_component2['default'].registerComponent('VolumeBar', VolumeBar);
exports['default'] = VolumeBar;

},{"39":39,"5":5,"57":57,"83":83}],38:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

_dereq_(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file volume-control.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// Required children


/**
 * The component for controlling the volume level
 *
 * @extends Component
 */
var VolumeControl = function (_Component) {
  _inherits(VolumeControl, _Component);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options={}]
   *        The key/value store of player options.
   */
  function VolumeControl(player, options) {
    _classCallCheck(this, VolumeControl);

    // hide volume controls when they're not supported by the current tech
    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    if (player.tech_ && player.tech_.featuresVolumeControl === false) {
      _this.addClass('vjs-hidden');
    }
    _this.on(player, 'loadstart', function () {
      if (player.tech_.featuresVolumeControl === false) {
        this.addClass('vjs-hidden');
      } else {
        this.removeClass('vjs-hidden');
      }
    });
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  VolumeControl.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-volume-control vjs-control'
    });
  };

  return VolumeControl;
}(_component2['default']);

/**
 * Default options for the `VolumeControl`
 *
 * @type {Object}
 * @private
 */


VolumeControl.prototype.options_ = {
  children: ['volumeBar']
};

_component2['default'].registerComponent('VolumeControl', VolumeControl);
exports['default'] = VolumeControl;

},{"37":37,"5":5}],39:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file volume-level.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Shows volume level
 *
 * @extends Component
 */
var VolumeLevel = function (_Component) {
  _inherits(VolumeLevel, _Component);

  function VolumeLevel() {
    _classCallCheck(this, VolumeLevel);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */
  VolumeLevel.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-volume-level',
      innerHTML: '<span class="vjs-control-text"></span>'
    });
  };

  return VolumeLevel;
}(_component2['default']);

_component2['default'].registerComponent('VolumeLevel', VolumeLevel);
exports['default'] = VolumeLevel;

},{"5":5}],40:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _popup = _dereq_(54);

var _popup2 = _interopRequireDefault(_popup);

var _popupButton = _dereq_(53);

var _popupButton2 = _interopRequireDefault(_popupButton);

var _muteToggle = _dereq_(11);

var _muteToggle2 = _interopRequireDefault(_muteToggle);

var _volumeBar = _dereq_(37);

var _volumeBar2 = _interopRequireDefault(_volumeBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file volume-menu-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Button for volume popup
 *
 * @extends PopupButton
 */
var VolumeMenuButton = function (_PopupButton) {
  _inherits(VolumeMenuButton, _PopupButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options={}]
   *        The key/value store of player options.
   */
  function VolumeMenuButton(player) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, VolumeMenuButton);

    // Default to inline
    if (options.inline === undefined) {
      options.inline = true;
    }

    // If the vertical option isn't passed at all, default to true.
    if (options.vertical === undefined) {
      // If an inline volumeMenuButton is used, we should default to using
      // a horizontal slider for obvious reasons.
      if (options.inline) {
        options.vertical = false;
      } else {
        options.vertical = true;
      }
    }

    // The vertical option needs to be set on the volumeBar as well,
    // since that will need to be passed along to the VolumeBar constructor
    options.volumeBar = options.volumeBar || {};
    options.volumeBar.vertical = !!options.vertical;

    // Same listeners as MuteToggle
    var _this = _possibleConstructorReturn(this, _PopupButton.call(this, player, options));

    _this.on(player, 'volumechange', _this.volumeUpdate);
    _this.on(player, 'loadstart', _this.volumeUpdate);

    // hide mute toggle if the current tech doesn't support volume control
    function updateVisibility() {
      if (player.tech_ && player.tech_.featuresVolumeControl === false) {
        this.addClass('vjs-hidden');
      } else {
        this.removeClass('vjs-hidden');
      }
    }

    updateVisibility.call(_this);
    _this.on(player, 'loadstart', updateVisibility);

    _this.on(_this.volumeBar, ['slideractive', 'focus'], function () {
      this.addClass('vjs-slider-active');
    });

    _this.on(_this.volumeBar, ['sliderinactive', 'blur'], function () {
      this.removeClass('vjs-slider-active');
    });

    _this.on(_this.volumeBar, ['focus'], function () {
      this.addClass('vjs-lock-showing');
    });

    _this.on(_this.volumeBar, ['blur'], function () {
      this.removeClass('vjs-lock-showing');
    });
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  VolumeMenuButton.prototype.buildCSSClass = function buildCSSClass() {
    var orientationClass = '';

    if (this.options_.vertical) {
      orientationClass = 'vjs-volume-menu-button-vertical';
    } else {
      orientationClass = 'vjs-volume-menu-button-horizontal';
    }

    return 'vjs-volume-menu-button ' + _PopupButton.prototype.buildCSSClass.call(this) + ' ' + orientationClass;
  };

  /**
   * Create the VolumeMenuButton popup
   *
   * @return {Popup}
   *         The popup that was created
   */


  VolumeMenuButton.prototype.createPopup = function createPopup() {
    var popup = new _popup2['default'](this.player_, {
      contentElType: 'div'
    });

    var vb = new _volumeBar2['default'](this.player_, this.options_.volumeBar);

    popup.addChild(vb);

    this.menuContent = popup;
    this.volumeBar = vb;

    this.attachVolumeBarEvents();

    return popup;
  };

  /**
   * This gets called when an `VolumeMenuButton` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  VolumeMenuButton.prototype.handleClick = function handleClick(event) {
    _muteToggle2['default'].prototype.handleClick.call(this);
    _PopupButton.prototype.handleClick.call(this);
  };

  /**
   * Add events listeners to the created `VolumeBar`.
   */


  VolumeMenuButton.prototype.attachVolumeBarEvents = function attachVolumeBarEvents() {
    this.menuContent.on(['mousedown', 'touchdown'], Fn.bind(this, this.handleMouseDown));
  };

  /**
   * Handle the `mousedown` and `touchdown` events on the `VolumeBar`
   *
   * @param {EventTarget~Event} [event]
   *        The `mousedown` or `touchdown` event that caused this to run.
   *
   * @listens mousedown
   * @listens touchdown
   */


  VolumeMenuButton.prototype.handleMouseDown = function handleMouseDown(event) {
    this.on(['mousemove', 'touchmove'], Fn.bind(this.volumeBar, this.volumeBar.handleMouseMove));
    this.on(this.el_.ownerDocument, ['mouseup', 'touchend'], this.handleMouseUp);
  };

  /**
   * Handle the `mouseup` and `touchend` events on the `VolumeBar`
   *
   * @param {EventTarget~Event} [event]
   *        The `mouseup` or `touchend` event that caused this to run.
   *
   * @listens mouseup
   * @listens touchend
   */


  VolumeMenuButton.prototype.handleMouseUp = function handleMouseUp(event) {
    this.off(['mousemove', 'touchmove'], Fn.bind(this.volumeBar, this.volumeBar.handleMouseMove));
  };

  return VolumeMenuButton;
}(_popupButton2['default']);

/**
 * @borrows MuteToggle#update as VolumeMenuButton#volumeUpdate
 */


VolumeMenuButton.prototype.volumeUpdate = _muteToggle2['default'].prototype.update;

/**
 * The text that should display over the `VolumeMenuButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
VolumeMenuButton.prototype.controlText_ = 'Mute';

_component2['default'].registerComponent('VolumeMenuButton', VolumeMenuButton);
exports['default'] = VolumeMenuButton;

},{"11":11,"37":37,"5":5,"53":53,"54":54,"83":83}],41:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _modalDialog = _dereq_(50);

var _modalDialog2 = _interopRequireDefault(_modalDialog);

var _mergeOptions = _dereq_(87);

var _mergeOptions2 = _interopRequireDefault(_mergeOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file error-display.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * A display that indicates an error has occurred. This means that the video
 * is unplayable.
 *
 * @extends ModalDialog
 */
var ErrorDisplay = function (_ModalDialog) {
  _inherits(ErrorDisplay, _ModalDialog);

  /**
   * Creates an instance of this class.
   *
   * @param  {Player} player
   *         The `Player` that this class should be attached to.
   *
   * @param  {Object} [options]
   *         The key/value store of player options.
   */
  function ErrorDisplay(player, options) {
    _classCallCheck(this, ErrorDisplay);

    var _this = _possibleConstructorReturn(this, _ModalDialog.call(this, player, options));

    _this.on(player, 'error', _this.open);
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   *
   * @deprecated Since version 5.
   */


  ErrorDisplay.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-error-display ' + _ModalDialog.prototype.buildCSSClass.call(this);
  };

  /**
   * Gets the localized error message based on the `Player`s error.
   *
   * @return {string}
   *         The `Player`s error message localized or an empty string.
   */


  ErrorDisplay.prototype.content = function content() {
    var error = this.player().error();

    return error ? this.localize(error.message) : '';
  };

  return ErrorDisplay;
}(_modalDialog2['default']);

/**
 * The default options for an `ErrorDisplay`.
 *
 * @private
 */


ErrorDisplay.prototype.options_ = (0, _mergeOptions2['default'])(_modalDialog2['default'].prototype.options_, {
  pauseOnOpen: false,
  fillAlways: true,
  temporary: false,
  uncloseable: true
});

_component2['default'].registerComponent('ErrorDisplay', ErrorDisplay);
exports['default'] = ErrorDisplay;

},{"5":5,"50":50,"87":87}],42:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _events = _dereq_(82);

var Events = _interopRequireWildcard(_events);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 * `EventTarget` is a class that can have the same API as the DOM `EventTarget`. It
 * adds shorthand functions that wrap around lengthy functions. For example:
 * the `on` function is a wrapper around `addEventListener`.
 *
 * @see [EventTarget Spec]{@link https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget}
 * @class EventTarget
 */
var EventTarget = function EventTarget() {};

/**
 * A Custom DOM event.
 *
 * @typedef {Object} EventTarget~Event
 * @see [Properties]{@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent}
 */

/**
 * All event listeners should follow the following format.
 *
 * @callback EventTarget~EventListener
 * @this {EventTarget}
 *
 * @param {EventTarget~Event} event
 *        the event that triggered this function
 *
 * @param {Object} [hash]
 *        hash of data sent during the event
 */

/**
 * An object containing event names as keys and booleans as values.
 *
 * > NOTE: If an event name is set to a true value here {@link EventTarget#trigger}
 *         will have extra functionality. See that function for more information.
 *
 * @property EventTarget.prototype.allowedEvents_
 * @private
 */
/**
 * @file src/js/event-target.js
 */
EventTarget.prototype.allowedEvents_ = {};

/**
 * Adds an `event listener` to an instance of an `EventTarget`. An `event listener` is a
 * function that will get called when an event with a certain name gets triggered.
 *
 * @param {string|string[]} type
 *        An event name or an array of event names.
 *
 * @param {EventTarget~EventListener} fn
 *        The function to call with `EventTarget`s
 */
EventTarget.prototype.on = function (type, fn) {
  // Remove the addEventListener alias before calling Events.on
  // so we don't get into an infinite type loop
  var ael = this.addEventListener;

  this.addEventListener = function () {};
  Events.on(this, type, fn);
  this.addEventListener = ael;
};

/**
 * An alias of {@link EventTarget#on}. Allows `EventTarget` to mimic
 * the standard DOM API.
 *
 * @function
 * @see {@link EventTarget#on}
 */
EventTarget.prototype.addEventListener = EventTarget.prototype.on;

/**
 * Removes an `event listener` for a specific event from an instance of `EventTarget`.
 * This makes it so that the `event listener` will no longer get called when the
 * named event happens.
 *
 * @param {string|string[]} type
 *        An event name or an array of event names.
 *
 * @param {EventTarget~EventListener} fn
 *        The function to remove.
 */
EventTarget.prototype.off = function (type, fn) {
  Events.off(this, type, fn);
};

/**
 * An alias of {@link EventTarget#off}. Allows `EventTarget` to mimic
 * the standard DOM API.
 *
 * @function
 * @see {@link EventTarget#off}
 */
EventTarget.prototype.removeEventListener = EventTarget.prototype.off;

/**
 * This function will add an `event listener` that gets triggered only once. After the
 * first trigger it will get removed. This is like adding an `event listener`
 * with {@link EventTarget#on} that calls {@link EventTarget#off} on itself.
 *
 * @param {string|string[]} type
 *        An event name or an array of event names.
 *
 * @param {EventTarget~EventListener} fn
 *        The function to be called once for each event name.
 */
EventTarget.prototype.one = function (type, fn) {
  // Remove the addEventListener alialing Events.on
  // so we don't get into an infinite type loop
  var ael = this.addEventListener;

  this.addEventListener = function () {};
  Events.one(this, type, fn);
  this.addEventListener = ael;
};

/**
 * This function causes an event to happen. This will then cause any `event listeners`
 * that are waiting for that event, to get called. If there are no `event listeners`
 * for an event then nothing will happen.
 *
 * If the name of the `Event` that is being triggered is in `EventTarget.allowedEvents_`.
 * Trigger will also call the `on` + `uppercaseEventName` function.
 *
 * Example:
 * 'click' is in `EventTarget.allowedEvents_`, so, trigger will attempt to call
 * `onClick` if it exists.
 *
 * @param {string|EventTarget~Event|Object} event
 *        The name of the event, an `Event`, or an object with a key of type set to
 *        an event name.
 */
EventTarget.prototype.trigger = function (event) {
  var type = event.type || event;

  if (typeof event === 'string') {
    event = { type: type };
  }
  event = Events.fixEvent(event);

  if (this.allowedEvents_[type] && this['on' + type]) {
    this['on' + type](event);
  }

  Events.trigger(this, event);
};

/**
 * An alias of {@link EventTarget#trigger}. Allows `EventTarget` to mimic
 * the standard DOM API.
 *
 * @function
 * @see {@link EventTarget#trigger}
 */
EventTarget.prototype.dispatchEvent = EventTarget.prototype.trigger;

exports['default'] = EventTarget;

},{"82":82}],43:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _log = _dereq_(86);

var _log2 = _interopRequireDefault(_log);

var _obj = _dereq_(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @file extend.js
 * @module extend
 */

/**
 * A combination of node inherits and babel's inherits (after transpile).
 * Both work the same but node adds `super_` to the subClass
 * and Bable adds the superClass as __proto__. Both seem useful.
 *
 * @param {Object} subClass
 *        The class to inherit to
 *
 * @param {Object} superClass
 *        The class to inherit from
 *
 * @private
 */
var _inherits = function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (superClass) {
    // node
    subClass.super_ = superClass;
  }
};

/**
 * Function for subclassing using the same inheritance that
 * videojs uses internally
 *
 * @param {Object} superClass
 *        The class to inherit from
 *
 * @param {Object} [subClassMethods={}]
 *        The class to inherit to
 *
 * @return {Object}
 *         The new object with subClassMethods that inherited superClass.
 */
var extendFn = function extendFn(superClass) {
  var subClassMethods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var subClass = function subClass() {
    superClass.apply(this, arguments);
  };

  var methods = {};

  if ((0, _obj.isObject)(subClassMethods)) {
    if (typeof subClassMethods.init === 'function') {
      _log2['default'].warn('Constructor logic via init() is deprecated; please use constructor() instead.');
      subClassMethods.constructor = subClassMethods.init;
    }
    if (subClassMethods.constructor !== Object.prototype.constructor) {
      subClass = subClassMethods.constructor;
    }
    methods = subClassMethods;
  } else if (typeof subClassMethods === 'function') {
    subClass = subClassMethods;
  }

  _inherits(subClass, superClass);

  // Extend subObj's prototype with functions and other properties from props
  for (var name in methods) {
    if (methods.hasOwnProperty(name)) {
      subClass.prototype[name] = methods[name];
    }
  }

  return subClass;
};

exports['default'] = extendFn;

},{"86":86,"88":88}],44:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _document = _dereq_(94);

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Store the browser-specific methods for the fullscreen API.
 *
 * @type {Object}
 * @see [Specification]{@link https://fullscreen.spec.whatwg.org}
 * @see [Map Approach From Screenfull.js]{@link https://github.com/sindresorhus/screenfull.js}
 */
var FullscreenApi = {};

// browser API methods
/**
 * @file fullscreen-api.js
 * @module fullscreen-api
 * @private
 */
var apiMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
// WebKit
['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
// Old WebKit (Safari 5.1)
['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'],
// Mozilla
['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
// Microsoft
['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];

var specApi = apiMap[0];
var browserApi = void 0;

// determine the supported set of functions
for (var i = 0; i < apiMap.length; i++) {
  // check for exitFullscreen function
  if (apiMap[i][1] in _document2['default']) {
    browserApi = apiMap[i];
    break;
  }
}

// map the browser API names to the spec API names
if (browserApi) {
  for (var _i = 0; _i < browserApi.length; _i++) {
    FullscreenApi[specApi[_i]] = browserApi[_i];
  }
}

exports['default'] = FullscreenApi;

},{"94":94}],45:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file loading-spinner.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * A loading spinner for use during waiting/loading events.
 *
 * @extends Component
 */
var LoadingSpinner = function (_Component) {
  _inherits(LoadingSpinner, _Component);

  function LoadingSpinner() {
    _classCallCheck(this, LoadingSpinner);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  /**
   * Create the `LoadingSpinner`s DOM element.
   *
   * @return {Element}
   *         The dom element that gets created.
   */
  LoadingSpinner.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-loading-spinner',
      dir: 'ltr'
    });
  };

  return LoadingSpinner;
}(_component2['default']);

_component2['default'].registerComponent('LoadingSpinner', LoadingSpinner);
exports['default'] = LoadingSpinner;

},{"5":5}],46:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _obj = _dereq_(88);

/**
 * A Custom `MediaError` class which mimics the standard HTML5 `MediaError` class.
 *
 * @param {number|string|Object|MediaError} value
 *        This can be of multiple types:
 *        - number: should be a standard error code
 *        - string: an error message (the code will be 0)
 *        - Object: arbitrary properties
 *        - `MediaError` (native): used to populate a video.js `MediaError` object
 *        - `MediaError` (video.js): will return itself if it's already a
 *          video.js `MediaError` object.
 *
 * @see [MediaError Spec]{@link https://dev.w3.org/html5/spec-author-view/video.html#mediaerror}
 * @see [Encrypted MediaError Spec]{@link https://www.w3.org/TR/2013/WD-encrypted-media-20130510/#error-codes}
 *
 * @class MediaError
 */
function MediaError(value) {

  // Allow redundant calls to this constructor to avoid having `instanceof`
  // checks peppered around the code.
  if (value instanceof MediaError) {
    return value;
  }

  if (typeof value === 'number') {
    this.code = value;
  } else if (typeof value === 'string') {
    // default code is zero, so this is a custom error
    this.message = value;
  } else if ((0, _obj.isObject)(value)) {

    // We assign the `code` property manually because native `MediaError` objects
    // do not expose it as an own/enumerable property of the object.
    if (typeof value.code === 'number') {
      this.code = value.code;
    }

    (0, _obj.assign)(this, value);
  }

  if (!this.message) {
    this.message = MediaError.defaultMessages[this.code] || '';
  }
}

/**
 * The error code that refers two one of the defined `MediaError` types
 *
 * @type {Number}
 */
/**
 * @file media-error.js
 */
MediaError.prototype.code = 0;

/**
 * An optional message that to show with the error. Message is not part of the HTML5
 * video spec but allows for more informative custom errors.
 *
 * @type {String}
 */
MediaError.prototype.message = '';

/**
 * An optional status code that can be set by plugins to allow even more detail about
 * the error. For example a plugin might provide a specific HTTP status code and an
 * error message for that code. Then when the plugin gets that error this class will
 * know how to display an error message for it. This allows a custom message to show
 * up on the `Player` error overlay.
 *
 * @type {Array}
 */
MediaError.prototype.status = null;

/**
 * Errors indexed by the W3C standard. The order **CANNOT CHANGE**! See the
 * specification listed under {@link MediaError} for more information.
 *
 * @enum {array}
 * @readonly
 * @property {string} 0 - MEDIA_ERR_CUSTOM
 * @property {string} 1 - MEDIA_ERR_CUSTOM
 * @property {string} 2 - MEDIA_ERR_ABORTED
 * @property {string} 3 - MEDIA_ERR_NETWORK
 * @property {string} 4 - MEDIA_ERR_SRC_NOT_SUPPORTED
 * @property {string} 5 - MEDIA_ERR_ENCRYPTED
 */
MediaError.errorTypes = ['MEDIA_ERR_CUSTOM', 'MEDIA_ERR_ABORTED', 'MEDIA_ERR_NETWORK', 'MEDIA_ERR_DECODE', 'MEDIA_ERR_SRC_NOT_SUPPORTED', 'MEDIA_ERR_ENCRYPTED'];

/**
 * The default `MediaError` messages based on the {@link MediaError.errorTypes}.
 *
 * @type {Array}
 * @constant
 */
MediaError.defaultMessages = {
  1: 'You aborted the media playback',
  2: 'A network error caused the media download to fail part-way.',
  3: 'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.',
  4: 'The media could not be loaded, either because the server or network failed or because the format is not supported.',
  5: 'The media is encrypted and we do not have the keys to decrypt it.'
};

// Add types as properties on MediaError
// e.g. MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
for (var errNum = 0; errNum < MediaError.errorTypes.length; errNum++) {
  MediaError[MediaError.errorTypes[errNum]] = errNum;
  // values should be accessible on both the class and instance
  MediaError.prototype[MediaError.errorTypes[errNum]] = errNum;
}

// jsdocs for instance/static members added above
// instance methods use `#` and static methods use `.`
/**
 * W3C error code for any custom error.
 *
 * @member MediaError#MEDIA_ERR_CUSTOM
 * @constant {number}
 * @default 0
 */
/**
 * W3C error code for any custom error.
 *
 * @member MediaError.MEDIA_ERR_CUSTOM
 * @constant {number}
 * @default 0
 */

/**
 * W3C error code for media error aborted.
 *
 * @member MediaError#MEDIA_ERR_ABORTED
 * @constant {number}
 * @default 1
 */
/**
 * W3C error code for media error aborted.
 *
 * @member MediaError.MEDIA_ERR_ABORTED
 * @constant {number}
 * @default 1
 */

/**
 * W3C error code for any network error.
 *
 * @member MediaError#MEDIA_ERR_NETWORK
 * @constant {number}
 * @default 2
 */
/**
 * W3C error code for any network error.
 *
 * @member MediaError.MEDIA_ERR_NETWORK
 * @constant {number}
 * @default 2
 */

/**
 * W3C error code for any decoding error.
 *
 * @member MediaError#MEDIA_ERR_DECODE
 * @constant {number}
 * @default 3
 */
/**
 * W3C error code for any decoding error.
 *
 * @member MediaError.MEDIA_ERR_DECODE
 * @constant {number}
 * @default 3
 */

/**
 * W3C error code for any time that a source is not supported.
 *
 * @member MediaError#MEDIA_ERR_SRC_NOT_SUPPORTED
 * @constant {number}
 * @default 4
 */
/**
 * W3C error code for any time that a source is not supported.
 *
 * @member MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED
 * @constant {number}
 * @default 4
 */

/**
 * W3C error code for any time that a source is encrypted.
 *
 * @member MediaError#MEDIA_ERR_ENCRYPTED
 * @constant {number}
 * @default 5
 */
/**
 * W3C error code for any time that a source is encrypted.
 *
 * @member MediaError.MEDIA_ERR_ENCRYPTED
 * @constant {number}
 * @default 5
 */

exports['default'] = MediaError;

},{"88":88}],47:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _clickableComponent = _dereq_(3);

var _clickableComponent2 = _interopRequireDefault(_clickableComponent);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _menu = _dereq_(49);

var _menu2 = _interopRequireDefault(_menu);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _toTitleCase = _dereq_(91);

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file menu-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * A `MenuButton` class for any popup {@link Menu}.
 *
 * @extends ClickableComponent
 */
var MenuButton = function (_ClickableComponent) {
  _inherits(MenuButton, _ClickableComponent);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options={}]
   *        The key/value store of player options.
   */
  function MenuButton(player) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, MenuButton);

    var _this = _possibleConstructorReturn(this, _ClickableComponent.call(this, player, options));

    _this.update();

    _this.enabled_ = true;

    _this.el_.setAttribute('aria-haspopup', 'true');
    _this.el_.setAttribute('role', 'menuitem');
    _this.on('keydown', _this.handleSubmenuKeyPress);
    return _this;
  }

  /**
   * Update the menu based on the current state of its items.
   */


  MenuButton.prototype.update = function update() {
    var menu = this.createMenu();

    if (this.menu) {
      this.removeChild(this.menu);
    }

    this.menu = menu;
    this.addChild(menu);

    /**
     * Track the state of the menu button
     *
     * @type {Boolean}
     * @private
     */
    this.buttonPressed_ = false;
    this.el_.setAttribute('aria-expanded', 'false');

    if (this.items && this.items.length <= this.hideThreshold_) {
      this.hide();
    } else {
      this.show();
    }
  };

  /**
   * Create the menu and add all items to it.
   *
   * @return {Menu}
   *         The constructed menu
   */


  MenuButton.prototype.createMenu = function createMenu() {
    var menu = new _menu2['default'](this.player_);

    /**
     * Hide the menu if the number of items is less than or equal to this threshold. This defaults
     * to 0 and whenever we add items which can be hidden to the menu we'll increment it. We list
     * it here because every time we run `createMenu` we need to reset the value.
     *
     * @protected
     * @type {Number}
     */
    this.hideThreshold_ = 0;

    // Add a title list item to the top
    if (this.options_.title) {
      var title = Dom.createEl('li', {
        className: 'vjs-menu-title',
        innerHTML: (0, _toTitleCase2['default'])(this.options_.title),
        tabIndex: -1
      });

      this.hideThreshold_ += 1;

      menu.children_.unshift(title);
      Dom.insertElFirst(title, menu.contentEl());
    }

    this.items = this.createItems();

    if (this.items) {
      // Add menu items to the menu
      for (var i = 0; i < this.items.length; i++) {
        menu.addItem(this.items[i]);
      }
    }

    return menu;
  };

  /**
   * Create the list of menu items. Specific to each subclass.
   *
   * @abstract
   */


  MenuButton.prototype.createItems = function createItems() {};

  /**
   * Create the `MenuButtons`s DOM element.
   *
   * @return {Element}
   *         The element that gets created.
   */


  MenuButton.prototype.createEl = function createEl() {
    return _ClickableComponent.prototype.createEl.call(this, 'div', {
      className: this.buildCSSClass()
    });
  };

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  MenuButton.prototype.buildCSSClass = function buildCSSClass() {
    var menuButtonClass = 'vjs-menu-button';

    // If the inline option is passed, we want to use different styles altogether.
    if (this.options_.inline === true) {
      menuButtonClass += '-inline';
    } else {
      menuButtonClass += '-popup';
    }

    return 'vjs-menu-button ' + menuButtonClass + ' ' + _ClickableComponent.prototype.buildCSSClass.call(this);
  };

  /**
   * Handle a click on a `MenuButton`.
   * See {@link ClickableComponent#handleClick} for instances where this is called.
   *
   * @param {EventTarget~Event} event
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  MenuButton.prototype.handleClick = function handleClick(event) {
    // When you click the button it adds focus, which will show the menu.
    // So we'll remove focus when the mouse leaves the button. Focus is needed
    // for tab navigation.

    this.one(this.menu.contentEl(), 'mouseleave', Fn.bind(this, function (e) {
      this.unpressButton();
      this.el_.blur();
    }));
    if (this.buttonPressed_) {
      this.unpressButton();
    } else {
      this.pressButton();
    }
  };

  /**
   * Handle tab, escape, down arrow, and up arrow keys for `MenuButton`. See
   * {@link ClickableComponent#handleKeyPress} for instances where this is called.
   *
   * @param {EventTarget~Event} event
   *        The `keydown` event that caused this function to be called.
   *
   * @listens keydown
   */


  MenuButton.prototype.handleKeyPress = function handleKeyPress(event) {

    // Escape (27) key or Tab (9) key unpress the 'button'
    if (event.which === 27 || event.which === 9) {
      if (this.buttonPressed_) {
        this.unpressButton();
      }
      // Don't preventDefault for Tab key - we still want to lose focus
      if (event.which !== 9) {
        event.preventDefault();
      }
      // Up (38) key or Down (40) key press the 'button'
    } else if (event.which === 38 || event.which === 40) {
      if (!this.buttonPressed_) {
        this.pressButton();
        event.preventDefault();
      }
    } else {
      _ClickableComponent.prototype.handleKeyPress.call(this, event);
    }
  };

  /**
   * Handle a `keydown` event on a sub-menu. The listener for this is added in
   * the constructor.
   *
   * @param {EventTarget~Event} event
   *        Key press event
   *
   * @listens keydown
   */


  MenuButton.prototype.handleSubmenuKeyPress = function handleSubmenuKeyPress(event) {

    // Escape (27) key or Tab (9) key unpress the 'button'
    if (event.which === 27 || event.which === 9) {
      if (this.buttonPressed_) {
        this.unpressButton();
      }
      // Don't preventDefault for Tab key - we still want to lose focus
      if (event.which !== 9) {
        event.preventDefault();
      }
    }
  };

  /**
   * Put the current `MenuButton` into a pressed state.
   */


  MenuButton.prototype.pressButton = function pressButton() {
    if (this.enabled_) {
      this.buttonPressed_ = true;
      this.menu.lockShowing();
      this.el_.setAttribute('aria-expanded', 'true');
      // set the focus into the submenu
      this.menu.focus();
    }
  };

  /**
   * Take the current `MenuButton` out of a pressed state.
   */


  MenuButton.prototype.unpressButton = function unpressButton() {
    if (this.enabled_) {
      this.buttonPressed_ = false;
      this.menu.unlockShowing();
      this.el_.setAttribute('aria-expanded', 'false');
      // Set focus back to this menu button
      this.el_.focus();
    }
  };

  /**
   * Disable the `MenuButton`. Don't allow it to be clicked.
   *
   * @return {MenuButton}
   *         Returns itself; method can be chained.
   */


  MenuButton.prototype.disable = function disable() {
    // Unpress, but don't force focus on this button
    this.buttonPressed_ = false;
    this.menu.unlockShowing();
    this.el_.setAttribute('aria-expanded', 'false');

    this.enabled_ = false;

    return _ClickableComponent.prototype.disable.call(this);
  };

  /**
   * Enable the `MenuButton`. Allow it to be clicked.
   *
   * @return {MenuButton}
   *         Returns itself; method can be chained.
   */


  MenuButton.prototype.enable = function enable() {
    this.enabled_ = true;

    return _ClickableComponent.prototype.enable.call(this);
  };

  return MenuButton;
}(_clickableComponent2['default']);

_component2['default'].registerComponent('MenuButton', MenuButton);
exports['default'] = MenuButton;

},{"3":3,"49":49,"5":5,"81":81,"83":83,"91":91}],48:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _clickableComponent = _dereq_(3);

var _clickableComponent2 = _interopRequireDefault(_clickableComponent);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _obj = _dereq_(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file menu-item.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The component for a menu item. `<li>`
 *
 * @extends ClickableComponent
 */
var MenuItem = function (_ClickableComponent) {
  _inherits(MenuItem, _ClickableComponent);

  /**
   * Creates an instance of the this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options={}]
   *        The key/value store of player options.
   *
   */
  function MenuItem(player, options) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, _ClickableComponent.call(this, player, options));

    _this.selectable = options.selectable;

    _this.selected(options.selected);

    if (_this.selectable) {
      // TODO: May need to be either menuitemcheckbox or menuitemradio,
      //       and may need logical grouping of menu items.
      _this.el_.setAttribute('role', 'menuitemcheckbox');
    } else {
      _this.el_.setAttribute('role', 'menuitem');
    }
    return _this;
  }

  /**
   * Create the `MenuItem's DOM element
   *
   * @param {string} [type=li]
   *        Element's node type, not actually used, always set to `li`.
   *
   * @param {Object} [props={}]
   *        An object of properties that should be set on the element
   *
   * @param {Object} [attrs={}]
   *        An object of attributes that should be set on the element
   *
   * @return {Element}
   *         The element that gets created.
   */


  MenuItem.prototype.createEl = function createEl(type, props, attrs) {
    // The control is textual, not just an icon
    this.nonIconControl = true;

    return _ClickableComponent.prototype.createEl.call(this, 'li', (0, _obj.assign)({
      className: 'vjs-menu-item',
      innerHTML: this.localize(this.options_.label),
      tabIndex: -1
    }, props), attrs);
  };

  /**
   * Any click on a `MenuItem` puts int into the selected state.
   * See {@link ClickableComponent#handleClick} for instances where this is called.
   *
   * @param {EventTarget~Event} event
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  MenuItem.prototype.handleClick = function handleClick(event) {
    this.selected(true);
  };

  /**
   * Set the state for this menu item as selected or not.
   *
   * @param {boolean} selected
   *        if the menu item is selected or not
   */


  MenuItem.prototype.selected = function selected(_selected) {
    if (this.selectable) {
      if (_selected) {
        this.addClass('vjs-selected');
        this.el_.setAttribute('aria-checked', 'true');
        // aria-checked isn't fully supported by browsers/screen readers,
        // so indicate selected state to screen reader in the control text.
        this.controlText(', selected');
      } else {
        this.removeClass('vjs-selected');
        this.el_.setAttribute('aria-checked', 'false');
        // Indicate un-selected state to screen reader
        // Note that a space clears out the selected state text
        this.controlText(' ');
      }
    }
  };

  return MenuItem;
}(_clickableComponent2['default']);

_component2['default'].registerComponent('MenuItem', MenuItem);
exports['default'] = MenuItem;

},{"3":3,"5":5,"88":88}],49:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _events = _dereq_(82);

var Events = _interopRequireWildcard(_events);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file menu.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The Menu component is used to build popup menus, including subtitle and
 * captions selection menus.
 *
 * @extends Component
 */
var Menu = function (_Component) {
  _inherits(Menu, _Component);

  /**
   * Create an instance of this class.
   *
   * @param {Player} player
   *        the player that this component should attach to
   *
   * @param {Object} [options]
   *        Object of option names and values
   *
   */
  function Menu(player, options) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    _this.focusedChild_ = -1;

    _this.on('keydown', _this.handleKeyPress);
    return _this;
  }

  /**
   * Add a {@link MenuItem} to the menu.
   *
   * @param {Object|string} component
   *        The name or instance of the `MenuItem` to add.
   *
   */


  Menu.prototype.addItem = function addItem(component) {
    this.addChild(component);
    component.on('click', Fn.bind(this, function (event) {
      this.unlockShowing();
      // TODO: Need to set keyboard focus back to the menuButton
    }));
  };

  /**
   * Create the `Menu`s DOM element.
   *
   * @return {Element}
   *         the element that was created
   */


  Menu.prototype.createEl = function createEl() {
    var contentElType = this.options_.contentElType || 'ul';

    this.contentEl_ = Dom.createEl(contentElType, {
      className: 'vjs-menu-content'
    });

    this.contentEl_.setAttribute('role', 'menu');

    var el = _Component.prototype.createEl.call(this, 'div', {
      append: this.contentEl_,
      className: 'vjs-menu'
    });

    el.setAttribute('role', 'presentation');
    el.appendChild(this.contentEl_);

    // Prevent clicks from bubbling up. Needed for Menu Buttons,
    // where a click on the parent is significant
    Events.on(el, 'click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    });

    return el;
  };

  /**
   * Handle a `keydown` event on this menu. This listener is added in the constructor.
   *
   * @param {EventTarget~Event} event
   *        A `keydown` event that happened on the menu.
   *
   * @listens keydown
   */


  Menu.prototype.handleKeyPress = function handleKeyPress(event) {
    // Left and Down Arrows
    if (event.which === 37 || event.which === 40) {
      event.preventDefault();
      this.stepForward();

      // Up and Right Arrows
    } else if (event.which === 38 || event.which === 39) {
      event.preventDefault();
      this.stepBack();
    }
  };

  /**
   * Move to next (lower) menu item for keyboard users.
   */


  Menu.prototype.stepForward = function stepForward() {
    var stepChild = 0;

    if (this.focusedChild_ !== undefined) {
      stepChild = this.focusedChild_ + 1;
    }
    this.focus(stepChild);
  };

  /**
   * Move to previous (higher) menu item for keyboard users.
   */


  Menu.prototype.stepBack = function stepBack() {
    var stepChild = 0;

    if (this.focusedChild_ !== undefined) {
      stepChild = this.focusedChild_ - 1;
    }
    this.focus(stepChild);
  };

  /**
   * Set focus on a {@link MenuItem} in the `Menu`.
   *
   * @param {Object|string} [item=0]
   *        Index of child item set focus on.
   */


  Menu.prototype.focus = function focus() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var children = this.children().slice();
    var haveTitle = children.length && children[0].className && /vjs-menu-title/.test(children[0].className);

    if (haveTitle) {
      children.shift();
    }

    if (children.length > 0) {
      if (item < 0) {
        item = 0;
      } else if (item >= children.length) {
        item = children.length - 1;
      }

      this.focusedChild_ = item;

      children[item].el_.focus();
    }
  };

  return Menu;
}(_component2['default']);

_component2['default'].registerComponent('Menu', Menu);
exports['default'] = Menu;

},{"5":5,"81":81,"82":82,"83":83}],50:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file modal-dialog.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MODAL_CLASS_NAME = 'vjs-modal-dialog';
var ESC = 27;

/**
 * The `ModalDialog` displays over the video and its controls, which blocks
 * interaction with the player until it is closed.
 *
 * Modal dialogs include a "Close" button and will close when that button
 * is activated - or when ESC is pressed anywhere.
 *
 * @extends Component
 */

var ModalDialog = function (_Component) {
  _inherits(ModalDialog, _Component);

  /**
   * Create an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Mixed} [options.content=undefined]
   *        Provide customized content for this modal.
   *
   * @param {string} [options.description]
   *        A text description for the modal, primarily for accessibility.
   *
   * @param {boolean} [options.fillAlways=false]
   *        Normally, modals are automatically filled only the first time
   *        they open. This tells the modal to refresh its content
   *        every time it opens.
   *
   * @param {string} [options.label]
   *        A text label for the modal, primarily for accessibility.
   *
   * @param {boolean} [options.temporary=true]
   *        If `true`, the modal can only be opened once; it will be
   *        disposed as soon as it's closed.
   *
   * @param {boolean} [options.uncloseable=false]
   *        If `true`, the user will not be able to close the modal
   *        through the UI in the normal ways. Programmatic closing is
   *        still possible.
   */
  function ModalDialog(player, options) {
    _classCallCheck(this, ModalDialog);

    var _this = _possibleConstructorReturn(this, _Component.call(this, player, options));

    _this.opened_ = _this.hasBeenOpened_ = _this.hasBeenFilled_ = false;

    _this.closeable(!_this.options_.uncloseable);
    _this.content(_this.options_.content);

    // Make sure the contentEl is defined AFTER any children are initialized
    // because we only want the contents of the modal in the contentEl
    // (not the UI elements like the close button).
    _this.contentEl_ = Dom.createEl('div', {
      className: MODAL_CLASS_NAME + '-content'
    }, {
      role: 'document'
    });

    _this.descEl_ = Dom.createEl('p', {
      className: MODAL_CLASS_NAME + '-description vjs-offscreen',
      id: _this.el().getAttribute('aria-describedby')
    });

    Dom.textContent(_this.descEl_, _this.description());
    _this.el_.appendChild(_this.descEl_);
    _this.el_.appendChild(_this.contentEl_);
    return _this;
  }

  /**
   * Create the `ModalDialog`'s DOM element
   *
   * @return {Element}
   *         The DOM element that gets created.
   */


  ModalDialog.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: this.buildCSSClass(),
      tabIndex: -1
    }, {
      'aria-describedby': this.id() + '_description',
      'aria-hidden': 'true',
      'aria-label': this.label(),
      'role': 'dialog'
    });
  };

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  ModalDialog.prototype.buildCSSClass = function buildCSSClass() {
    return MODAL_CLASS_NAME + ' vjs-hidden ' + _Component.prototype.buildCSSClass.call(this);
  };

  /**
   * Handles `keydown` events on the document, looking for ESC, which closes
   * the modal.
   *
   * @param {EventTarget~Event} e
   *        The keypress that triggered this event.
   *
   * @listens keydown
   */


  ModalDialog.prototype.handleKeyPress = function handleKeyPress(e) {
    if (e.which === ESC && this.closeable()) {
      this.close();
    }
  };

  /**
   * Returns the label string for this modal. Primarily used for accessibility.
   *
   * @return {string}
   *         the localized or raw label of this modal.
   */


  ModalDialog.prototype.label = function label() {
    return this.options_.label || this.localize('Modal Window');
  };

  /**
   * Returns the description string for this modal. Primarily used for
   * accessibility.
   *
   * @return {string}
   *         The localized or raw description of this modal.
   */


  ModalDialog.prototype.description = function description() {
    var desc = this.options_.description || this.localize('This is a modal window.');

    // Append a universal closeability message if the modal is closeable.
    if (this.closeable()) {
      desc += ' ' + this.localize('This modal can be closed by pressing the Escape key or activating the close button.');
    }

    return desc;
  };

  /**
   * Opens the modal.
   *
   * @fires ModalDialog#beforemodalopen
   * @fires ModalDialog#modalopen
   *
   * @return {ModalDialog}
   *         Returns itself; method can be chained.
   */


  ModalDialog.prototype.open = function open() {
    if (!this.opened_) {
      var player = this.player();

      /**
       * Fired just before a `ModalDialog` is opened.
       *
       * @event ModalDialog#beforemodalopen
       * @type {EventTarget~Event}
       */
      this.trigger('beforemodalopen');
      this.opened_ = true;

      // Fill content if the modal has never opened before and
      // never been filled.
      if (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) {
        this.fill();
      }

      // If the player was playing, pause it and take note of its previously
      // playing state.
      this.wasPlaying_ = !player.paused();

      if (this.options_.pauseOnOpen && this.wasPlaying_) {
        player.pause();
      }

      if (this.closeable()) {
        this.on(this.el_.ownerDocument, 'keydown', Fn.bind(this, this.handleKeyPress));
      }

      player.controls(false);
      this.show();
      this.el().setAttribute('aria-hidden', 'false');

      /**
       * Fired just after a `ModalDialog` is opened.
       *
       * @event ModalDialog#modalopen
       * @type {EventTarget~Event}
       */
      this.trigger('modalopen');
      this.hasBeenOpened_ = true;
    }
    return this;
  };

  /**
   * If the `ModalDialog` is currently open or closed.
   *
   * @param  {boolean} [value]
   *         If given, it will open (`true`) or close (`false`) the modal.
   *
   * @return {boolean}
   *         the current open state of the modaldialog
   */


  ModalDialog.prototype.opened = function opened(value) {
    if (typeof value === 'boolean') {
      this[value ? 'open' : 'close']();
    }
    return this.opened_;
  };

  /**
   * Closes the modal, does nothing if the `ModalDialog` is
   * not open.
   *
   * @fires ModalDialog#beforemodalclose
   * @fires ModalDialog#modalclose
   *
   * @return {ModalDialog}
   *         Returns itself; method can be chained.
   */


  ModalDialog.prototype.close = function close() {
    if (this.opened_) {
      var player = this.player();

      /**
       * Fired just before a `ModalDialog` is closed.
       *
       * @event ModalDialog#beforemodalclose
       * @type {EventTarget~Event}
       */
      this.trigger('beforemodalclose');
      this.opened_ = false;

      if (this.wasPlaying_ && this.options_.pauseOnOpen) {
        player.play();
      }

      if (this.closeable()) {
        this.off(this.el_.ownerDocument, 'keydown', Fn.bind(this, this.handleKeyPress));
      }

      player.controls(true);
      this.hide();
      this.el().setAttribute('aria-hidden', 'true');

      /**
       * Fired just after a `ModalDialog` is closed.
       *
       * @event ModalDialog#modalclose
       * @type {EventTarget~Event}
       */
      this.trigger('modalclose');

      if (this.options_.temporary) {
        this.dispose();
      }
    }
    return this;
  };

  /**
   * Check to see if the `ModalDialog` is closeable via the UI.
   *
   * @param  {boolean} [value]
   *         If given as a boolean, it will set the `closeable` option.
   *
   * @return {boolean}
   *         Returns the final value of the closable option.
   */


  ModalDialog.prototype.closeable = function closeable(value) {
    if (typeof value === 'boolean') {
      var closeable = this.closeable_ = !!value;
      var close = this.getChild('closeButton');

      // If this is being made closeable and has no close button, add one.
      if (closeable && !close) {

        // The close button should be a child of the modal - not its
        // content element, so temporarily change the content element.
        var temp = this.contentEl_;

        this.contentEl_ = this.el_;
        close = this.addChild('closeButton', { controlText: 'Close Modal Dialog' });
        this.contentEl_ = temp;
        this.on(close, 'close', this.close);
      }

      // If this is being made uncloseable and has a close button, remove it.
      if (!closeable && close) {
        this.off(close, 'close', this.close);
        this.removeChild(close);
        close.dispose();
      }
    }
    return this.closeable_;
  };

  /**
   * Fill the modal's content element with the modal's "content" option.
   * The content element will be emptied before this change takes place.
   *
   * @return {ModalDialog}
   *         Returns itself; method can be chained.
   */


  ModalDialog.prototype.fill = function fill() {
    return this.fillWith(this.content());
  };

  /**
   * Fill the modal's content element with arbitrary content.
   * The content element will be emptied before this change takes place.
   *
   * @fires ModalDialog#beforemodalfill
   * @fires ModalDialog#modalfill
   *
   * @param  {Mixed} [content]
   *         The same rules apply to this as apply to the `content` option.
   *
   * @return {ModalDialog}
   *         Returns itself; method can be chained.
   */


  ModalDialog.prototype.fillWith = function fillWith(content) {
    var contentEl = this.contentEl();
    var parentEl = contentEl.parentNode;
    var nextSiblingEl = contentEl.nextSibling;

    /**
     * Fired just before a `ModalDialog` is filled with content.
     *
     * @event ModalDialog#beforemodalfill
     * @type {EventTarget~Event}
     */
    this.trigger('beforemodalfill');
    this.hasBeenFilled_ = true;

    // Detach the content element from the DOM before performing
    // manipulation to avoid modifying the live DOM multiple times.
    parentEl.removeChild(contentEl);
    this.empty();
    Dom.insertContent(contentEl, content);
    /**
     * Fired just after a `ModalDialog` is filled with content.
     *
     * @event ModalDialog#modalfill
     * @type {EventTarget~Event}
     */
    this.trigger('modalfill');

    // Re-inject the re-filled content element.
    if (nextSiblingEl) {
      parentEl.insertBefore(contentEl, nextSiblingEl);
    } else {
      parentEl.appendChild(contentEl);
    }

    return this;
  };

  /**
   * Empties the content element. This happens anytime the modal is filled.
   *
   * @fires ModalDialog#beforemodalempty
   * @fires ModalDialog#modalempty
   *
   * @return {ModalDialog}
   *         Returns itself; method can be chained.
   */


  ModalDialog.prototype.empty = function empty() {
    /**
     * Fired just before a `ModalDialog` is emptied.
     *
     * @event ModalDialog#beforemodalempty
     * @type {EventTarget~Event}
     */
    this.trigger('beforemodalempty');
    Dom.emptyEl(this.contentEl());

    /**
     * Fired just after a `ModalDialog` is emptied.
     *
     * @event ModalDialog#modalempty
     * @type {EventTarget~Event}
     */
    this.trigger('modalempty');
    return this;
  };

  /**
   * Gets or sets the modal content, which gets normalized before being
   * rendered into the DOM.
   *
   * This does not update the DOM or fill the modal, but it is called during
   * that process.
   *
   * @param  {Mixed} [value]
   *         If defined, sets the internal content value to be used on the
   *         next call(s) to `fill`. This value is normalized before being
   *         inserted. To "clear" the internal content value, pass `null`.
   *
   * @return {Mixed}
   *         The current content of the modal dialog
   */


  ModalDialog.prototype.content = function content(value) {
    if (typeof value !== 'undefined') {
      this.content_ = value;
    }
    return this.content_;
  };

  return ModalDialog;
}(_component2['default']);

/**
 * Default options for `ModalDialog` default options.
 *
 * @type {Object}
 * @private
 */


ModalDialog.prototype.options_ = {
  pauseOnOpen: true,
  temporary: true
};

_component2['default'].registerComponent('ModalDialog', ModalDialog);
exports['default'] = ModalDialog;

},{"5":5,"81":81,"83":83}],51:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

var _component = _dereq_(5);

var _component2 = _interopRequireDefault(_component);

var _document = _dereq_(94);

var _document2 = _interopRequireDefault(_document);

var _window = _dereq_(95);

var _window2 = _interopRequireDefault(_window);

var _events = _dereq_(82);

var Events = _interopRequireWildcard(_events);

var _dom = _dereq_(81);

var Dom = _interopRequireWildcard(_dom);

var _fn = _dereq_(83);

var Fn = _interopRequireWildcard(_fn);

var _guid = _dereq_(85);

var Guid = _interopRequireWildcard(_guid);

var _browser = _dereq_(78);

var browser = _interopRequireWildcard(_browser);

var _log = _dereq_(86);

var _log2 = _interopRequireDefault(_log);

var _toTitleCase = _dereq_(91);

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

var _timeRanges = _dereq_(90);

var _buffer = _dereq_(79);

var _stylesheet = _dereq_(89);

var stylesheet = _interopRequireWildcard(_stylesheet);

var _fullscreenApi = _dereq_(44);

var _fullscreenApi2 = _interopRequireDefault(_fullscreenApi);

var _mediaError = _dereq_(46);

var _mediaError2 = _interopRequireDefault(_mediaError);

var _tuple = _dereq_(97);

var _tuple2 = _interopRequireDefault(_tuple);

var _obj = _dereq_(88);

var _mergeOptions = _dereq_(87);

var _mergeOptions2 = _interopRequireDefault(_mergeOptions);

var _textTrackListConverter = _dereq_(69);

var _textTrackListConverter2 = _interopRequireDefault(_textTrackListConverter);

var _modalDialog = _dereq_(50);

var _modalDialog2 = _interopRequireDefault(_modalDialog);

var _tech = _dereq_(62);

var _tech2 = _interopRequireDefault(_tech);

var _audioTrackList = _dereq_(63);

var _audioTrackList2 = _interopRequireDefault(_audioTrackList);

var _videoTrackList = _dereq_(76);

var _videoTrackList2 = _interopRequireDefault(_videoTrackList);

_dereq_(61);

_dereq_(59);

_dereq_(55);

_dereq_(68);

_dereq_(45);

_dereq_(1);

_dereq_(4);

_dereq_(8);

_dereq_(41);

_dereq_(71);

_dereq_(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file player.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
// Subclasses Component


// The following imports are used only to ensure that the corresponding modules
// are always included in the video.js package. Importing the modules will
// execute them and they will register themselves with video.js.


// Import Html5 tech, at least for disposing the original video tag.


// The following tech events are simply re-triggered
// on the player when they happen
var TECH_EVENTS_RETRIGGER = [
/**
 * Fired while the user agent is downloading media data.
 *
 * @event Player#progress
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `progress` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechProgress_
 * @fires Player#progress
 * @listens Tech#progress
 */
'progress',

/**
 * Fires when the loading of an audio/video is aborted.
 *
 * @event Player#abort
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `abort` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechAbort_
 * @fires Player#abort
 * @listens Tech#abort
 */
'abort',

/**
 * Fires when the browser is intentionally not getting media data.
 *
 * @event Player#suspend
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `suspend` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechSuspend_
 * @fires Player#suspend
 * @listens Tech#suspend
 */
'suspend',

/**
 * Fires when the current playlist is empty.
 *
 * @event Player#emptied
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `emptied` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechEmptied_
 * @fires Player#emptied
 * @listens Tech#emptied
 */
'emptied',
/**
 * Fires when the browser is trying to get media data, but data is not available.
 *
 * @event Player#stalled
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `stalled` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechStalled_
 * @fires Player#stalled
 * @listens Tech#stalled
 */
'stalled',

/**
 * Fires when the browser has loaded meta data for the audio/video.
 *
 * @event Player#loadedmetadata
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `stalled` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechLoadedmetadata_
 * @fires Player#loadedmetadata
 * @listens Tech#loadedmetadata
 */
'loadedmetadata',

/**
 * Fires when the browser has loaded the current frame of the audio/video.
 *
 * @event player#loadeddata
 * @type {event}
 */
/**
 * Retrigger the `loadeddata` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechLoaddeddata_
 * @fires Player#loadeddata
 * @listens Tech#loadeddata
 */
'loadeddata',

/**
 * Fires when the current playback position has changed.
 *
 * @event player#timeupdate
 * @type {event}
 */
/**
 * Retrigger the `timeupdate` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechTimeUpdate_
 * @fires Player#timeupdate
 * @listens Tech#timeupdate
 */
'timeupdate',

/**
 * Fires when the playing speed of the audio/video is changed
 *
 * @event player#ratechange
 * @type {event}
 */
/**
 * Retrigger the `ratechange` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechRatechange_
 * @fires Player#ratechange
 * @listens Tech#ratechange
 */
'ratechange',

/**
 * Fires when the volume has been changed
 *
 * @event player#volumechange
 * @type {event}
 */
/**
 * Retrigger the `volumechange` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechVolumechange_
 * @fires Player#volumechange
 * @listens Tech#volumechange
 */
'volumechange',

/**
 * Fires when the text track has been changed
 *
 * @event player#texttrackchange
 * @type {event}
 */
/**
 * Retrigger the `texttrackchange` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechTexttrackchange_
 * @fires Player#texttrackchange
 * @listens Tech#texttrackchange
 */
'texttrackchange'];

/**
 * An instance of the `Player` class is created when any of the Video.js setup methods
 * are used to initialize a video.
 *
 * After an instance has been created it can be accessed globally in two ways:
 * 1. By calling `videojs('example_video_1');`
 * 2. By using it directly via  `videojs.players.example_video_1;`
 *
 * @extends Component
 */

var Player = function (_Component) {
  _inherits(Player, _Component);

  /**
   * Create an instance of this class.
   *
   * @param {Element} tag
   *        The original video DOM element used for configuring options.
   *
   * @param {Object} [options]
   *        Object of option names and values.
   *
   * @param {Component~ReadyCallback} [ready]
   *        Ready callback function.
   */
  function Player(tag, options, ready) {
    _classCallCheck(this, Player);

    // Make sure tag ID exists
    tag.id = tag.id || 'vjs_video_' + Guid.newGUID();

    // Set Options
    // The options argument overrides options set in the video tag
    // which overrides globally set options.
    // This latter part coincides with the load order
    // (tag must exist before Player)
    options = (0, _obj.assign)(Player.getTagSettings(tag), options);

    // Delay the initialization of children because we need to set up
    // player properties first, and can't use `this` before `super()`
    options.initChildren = false;

    // Same with creating the element
    options.createEl = false;

    // we don't want the player to report touch activity on itself
    // see enableTouchActivity in Component
    options.reportTouchActivity = false;

    // If language is not set, get the closest lang attribute
    if (!options.language) {
      if (typeof tag.closest === 'function') {
        var closest = tag.closest('[lang]');

        if (closest) {
          options.language = closest.getAttribute('lang');
        }
      } else {
        var element = tag;

        while (element && element.nodeType === 1) {
          if (Dom.getElAttributes(element).hasOwnProperty('lang')) {
            options.language = element.getAttribute('lang');
            break;
          }
          element = element.parentNode;
        }
      }
    }

    // Run base component initializing with new options

    // if the global option object was accidentally blown away by
    // someone, bail early with an informative error
    var _this = _possibleConstructorReturn(this, _Component.call(this, null, options, ready));

    if (!_this.options_ || !_this.options_.techOrder || !_this.options_.techOrder.length) {
      throw new Error('No techOrder specified. Did you overwrite ' + 'videojs.options instead of just changing the ' + 'properties you want to override?');
    }

    // Store the original tag used to set options
    _this.tag = tag;

    // Store the tag attributes used to restore html5 element
    _this.tagAttributes = tag && Dom.getElAttributes(tag);

    // Update current language
    _this.language(_this.options_.language);

    // Update Supported Languages
    if (options.languages) {
      // Normalise player option languages to lowercase
      var languagesToLower = {};

      Object.getOwnPropertyNames(options.languages).forEach(function (name) {
        languagesToLower[name.toLowerCase()] = options.languages[name];
      });
      _this.languages_ = languagesToLower;
    } else {
      _this.languages_ = Player.prototype.options_.languages;
    }

    // Cache for video property values.
    _this.cache_ = {};

    // Set poster
    _this.poster_ = options.poster || '';

    // Set controls
    _this.controls_ = !!options.controls;

    // Original tag settings stored in options
    // now remove immediately so native controls don't flash.
    // May be turned back on by HTML5 tech if nativeControlsForTouch is true
    tag.controls = false;

    /*
     * Store the internal state of scrubbing
     *
     * @private
     * @return {Boolean} True if the user is scrubbing
     */
    _this.scrubbing_ = false;

    _this.el_ = _this.createEl();

    // We also want to pass the original player options to each component and plugin
    // as well so they don't need to reach back into the player for options later.
    // We also need to do another copy of this.options_ so we don't end up with
    // an infinite loop.
    var playerOptionsCopy = (0, _mergeOptions2['default'])(_this.options_);

    // Load plugins
    if (options.plugins) {
      var plugins = options.plugins;

      Object.getOwnPropertyNames(plugins).forEach(function (name) {
        if (typeof this[name] === 'function') {
          this[name](plugins[name]);
        } else {
          _log2['default'].error('Unable to find plugin:', name);
        }
      }, _this);
    }

    _this.options_.playerOptions = playerOptionsCopy;

    _this.initChildren();

    // Set isAudio based on whether or not an audio tag was used
    _this.isAudio(tag.nodeName.toLowerCase() === 'audio');

    // Update controls className. Can't do this when the controls are initially
    // set because the element doesn't exist yet.
    if (_this.controls()) {
      _this.addClass('vjs-controls-enabled');
    } else {
      _this.addClass('vjs-controls-disabled');
    }

    // Set ARIA label and region role depending on player type
    _this.el_.setAttribute('role', 'region');
    if (_this.isAudio()) {
      _this.el_.setAttribute('aria-label', 'audio player');
    } else {
      _this.el_.setAttribute('aria-label', 'video player');
    }

    if (_this.isAudio()) {
      _this.addClass('vjs-audio');
    }

    if (_this.flexNotSupported_()) {
      _this.addClass('vjs-no-flex');
    }

    // TODO: Make this smarter. Toggle user state between touching/mousing
    // using events, since devices can have both touch and mouse events.
    // if (browser.TOUCH_ENABLED) {
    //   this.addClass('vjs-touch-enabled');
    // }

    // iOS Safari has broken hover handling
    if (!browser.IS_IOS) {
      _this.addClass('vjs-workinghover');
    }

    // Make player easily findable by ID
    Player.players[_this.id_] = _this;

    // When the player is first initialized, trigger activity so components
    // like the control bar show themselves if needed
    _this.userActive(true);
    _this.reportUserActivity();
    _this.listenForUserActivity_();

    _this.on('fullscreenchange', _this.handleFullscreenChange_);
    _this.on('stageclick', _this.handleStageClick_);
    return _this;
  }

  /**
   * Destroys the video player and does any necessary cleanup.
   *
   * This is especially helpful if you are dynamically adding and removing videos
   * to/from the DOM.
   *
   * @fires Player#dispose
   */


  Player.prototype.dispose = function dispose() {
    /**
     * Called when the player is being disposed of.
     *
     * @event Player#dispose
     * @type {EventTarget~Event}
     */
    this.trigger('dispose');
    // prevent dispose from being called twice
    this.off('dispose');

    if (this.styleEl_ && this.styleEl_.parentNode) {
      this.styleEl_.parentNode.removeChild(this.styleEl_);
    }

    // Kill reference to this player
    Player.players[this.id_] = null;

    if (this.tag && this.tag.player) {
      this.tag.player = null;
    }

    if (this.el_ && this.el_.player) {
      this.el_.player = null;
    }

    if (this.tech_) {
      this.tech_.dispose();
    }

    _Component.prototype.dispose.call(this);
  };

  /**
   * Create the `Player`'s DOM element.
   *
   * @return {Element}
   *         The DOM element that gets created.
   */


  Player.prototype.createEl = function createEl() {
    var tag = this.tag;
    var el = void 0;
    var playerElIngest = this.playerElIngest_ = tag.parentNode && tag.parentNode.hasAttribute && tag.parentNode.hasAttribute('data-vjs-player');

    if (playerElIngest) {
      el = this.el_ = tag.parentNode;
    } else {
      el = this.el_ = _Component.prototype.createEl.call(this, 'div');
    }

    // set tabindex to -1 so we could focus on the player element
    tag.setAttribute('tabindex', '-1');

    // Remove width/height attrs from tag so CSS can make it 100% width/height
    tag.removeAttribute('width');
    tag.removeAttribute('height');

    // Copy over all the attributes from the tag, including ID and class
    // ID will now reference player box, not the video tag
    var attrs = Dom.getElAttributes(tag);

    Object.getOwnPropertyNames(attrs).forEach(function (attr) {
      // workaround so we don't totally break IE7
      // http://stackoverflow.com/questions/3653444/css-styles-not-applied-on-dynamic-elements-in-internet-explorer-7
      if (attr === 'class') {
        el.className += ' ' + attrs[attr];
      } else {
        el.setAttribute(attr, attrs[attr]);
      }
    });

    // Update tag id/class for use as HTML5 playback tech
    // Might think we should do this after embedding in container so .vjs-tech class
    // doesn't flash 100% width/height, but class only applies with .video-js parent
    tag.playerId = tag.id;
    tag.id += '_html5_api';
    tag.className = 'vjs-tech';

    // Make player findable on elements
    tag.player = el.player = this;
    // Default state of video is paused
    this.addClass('vjs-paused');

    // Add a style element in the player that we'll use to set the width/height
    // of the player in a way that's still overrideable by CSS, just like the
    // video element
    if (_window2['default'].VIDEOJS_NO_DYNAMIC_STYLE !== true) {
      this.styleEl_ = stylesheet.createStyleElement('vjs-styles-dimensions');
      var defaultsStyleEl = Dom.$('.vjs-styles-defaults');
      var head = Dom.$('head');

      head.insertBefore(this.styleEl_, defaultsStyleEl ? defaultsStyleEl.nextSibling : head.firstChild);
    }

    // Pass in the width/height/aspectRatio options which will update the style el
    this.width(this.options_.width);
    this.height(this.options_.height);
    this.fluid(this.options_.fluid);
    this.aspectRatio(this.options_.aspectRatio);

    // Hide any links within the video/audio tag, because IE doesn't hide them completely.
    var links = tag.getElementsByTagName('a');

    for (var i = 0; i < links.length; i++) {
      var linkEl = links.item(i);

      Dom.addElClass(linkEl, 'vjs-hidden');
      linkEl.setAttribute('hidden', 'hidden');
    }

    // insertElFirst seems to cause the networkState to flicker from 3 to 2, so
    // keep track of the original for later so we can know if the source originally failed
    tag.initNetworkState_ = tag.networkState;

    // Wrap video tag in div (el/box) container
    if (tag.parentNode && !playerElIngest) {
      tag.parentNode.insertBefore(el, tag);
    }

    // insert the tag as the first child of the player element
    // then manually add it to the children array so that this.addChild
    // will work properly for other components
    //
    // Breaks iPhone, fixed in HTML5 setup.
    Dom.insertElFirst(tag, el);
    this.children_.unshift(tag);

    this.el_ = el;

    return el;
  };

  /**
   * A getter/setter for the `Player`'s width.
   *
   * @param {number} [value]
   *        The value to set the `Player's width to.
   *
   * @return {number}
   *         The current width of the `Player`.
   */


  Player.prototype.width = function width(value) {
    return this.dimension('width', value);
  };

  /**
   * A getter/setter for the `Player`'s height.
   *
   * @param {number} [value]
   *        The value to set the `Player's heigth to.
   *
   * @return {number}
   *         The current heigth of the `Player`.
   */


  Player.prototype.height = function height(value) {
    return this.dimension('height', value);
  };

  /**
   * A getter/setter for the `Player`'s width & height.
   *
   * @param {string} dimension
   *        This string can be:
   *        - 'width'
   *        - 'height'
   *
   * @param {number} [value]
   *        Value for dimension specified in the first argument.
   *
   * @return {Player|number}
   *         - Returns itself when setting; method can be chained.
   *         - The dimension arguments value when getting (width/height).
   */


  Player.prototype.dimension = function dimension(_dimension, value) {
    var privDimension = _dimension + '_';

    if (value === undefined) {
      return this[privDimension] || 0;
    }

    if (value === '') {
      // If an empty string is given, reset the dimension to be automatic
      this[privDimension] = undefined;
    } else {
      var parsedVal = parseFloat(value);

      if (isNaN(parsedVal)) {
        _log2['default'].error('Improper value "' + value + '" supplied for for ' + _dimension);
        return this;
      }

      this[privDimension] = parsedVal;
    }

    this.updateStyleEl_();
    return this;
  };

  /**
   * A getter/setter/toggler for the vjs-fluid `className` on the `Player`.
   *
   * @param {boolean} [bool]
   *        - A value of true adds the class.
   *        - A value of false removes the class.
   *        - No value will toggle the fluid class.
   *
   * @return {boolean|undefined}
   *         - The value of fluid when getting.
   *         - `undefined` when setting.
   */


  Player.prototype.fluid = function fluid(bool) {
    if (bool === undefined) {
      return !!this.fluid_;
    }

    this.fluid_ = !!bool;

    if (bool) {
      this.addClass('vjs-fluid');
    } else {
      this.removeClass('vjs-fluid');
    }

    this.updateStyleEl_();
  };

  /**
   * Get/Set the aspect ratio
   *
   * @param {string} [ratio]
   *        Aspect ratio for player
   *
   * @return {string|undefined}
   *         returns the current aspect ratio when getting
   */

  /**
   * A getter/setter for the `Player`'s aspect ratio.
   *
   * @param {string} [ratio]
   *        The value to set the `Player's aspect ratio to.
   *
   * @return {string|undefined}
   *         - The current aspect ratio of the `Player` when getting.
   *         - undefined when setting
   */


  Player.prototype.aspectRatio = function aspectRatio(ratio) {
    if (ratio === undefined) {
      return this.aspectRatio_;
    }

    // Check for width:height format
    if (!/^\d+\:\d+$/.test(ratio)) {
      throw new Error('Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.');
    }
    this.aspectRatio_ = ratio;

    // We're assuming if you set an aspect ratio you want fluid mode,
    // because in fixed mode you could calculate width and height yourself.
    this.fluid(true);

    this.updateStyleEl_();
  };

  /**
   * Update styles of the `Player` element (height, width and aspect ratio).
   *
   * @private
   * @listens Tech#loadedmetadata
   */


  Player.prototype.updateStyleEl_ = function updateStyleEl_() {
    if (_window2['default'].VIDEOJS_NO_DYNAMIC_STYLE === true) {
      var _width = typeof this.width_ === 'number' ? this.width_ : this.options_.width;
      var _height = typeof this.height_ === 'number' ? this.height_ : this.options_.height;
      var techEl = this.tech_ && this.tech_.el();

      if (techEl) {
        if (_width >= 0) {
          techEl.width = _width;
        }
        if (_height >= 0) {
          techEl.height = _height;
        }
      }

      return;
    }

    var width = void 0;
    var height = void 0;
    var aspectRatio = void 0;
    var idClass = void 0;

    // The aspect ratio is either used directly or to calculate width and height.
    if (this.aspectRatio_ !== undefined && this.aspectRatio_ !== 'auto') {
      // Use any aspectRatio that's been specifically set
      aspectRatio = this.aspectRatio_;
    } else if (this.videoWidth() > 0) {
      // Otherwise try to get the aspect ratio from the video metadata
      aspectRatio = this.videoWidth() + ':' + this.videoHeight();
    } else {
      // Or use a default. The video element's is 2:1, but 16:9 is more common.
      aspectRatio = '16:9';
    }

    // Get the ratio as a decimal we can use to calculate dimensions
    var ratioParts = aspectRatio.split(':');
    var ratioMultiplier = ratioParts[1] / ratioParts[0];

    if (this.width_ !== undefined) {
      // Use any width that's been specifically set
      width = this.width_;
    } else if (this.height_ !== undefined) {
      // Or calulate the width from the aspect ratio if a height has been set
      width = this.height_ / ratioMultiplier;
    } else {
      // Or use the video's metadata, or use the video el's default of 300
      width = this.videoWidth() || 300;
    }

    if (this.height_ !== undefined) {
      // Use any height that's been specifically set
      height = this.height_;
    } else {
      // Otherwise calculate the height from the ratio and the width
      height = width * ratioMultiplier;
    }

    // Ensure the CSS class is valid by starting with an alpha character
    if (/^[^a-zA-Z]/.test(this.id())) {
      idClass = 'dimensions-' + this.id();
    } else {
      idClass = this.id() + '-dimensions';
    }

    // Ensure the right class is still on the player for the style element
    this.addClass(idClass);

    stylesheet.setTextContent(this.styleEl_, '\n      .' + idClass + ' {\n        width: ' + width + 'px;\n        height: ' + height + 'px;\n      }\n\n      .' + idClass + '.vjs-fluid {\n        padding-top: ' + ratioMultiplier * 100 + '%;\n      }\n    ');
  };

  /**
   * Load/Create an instance of playback {@link Tech} including element
   * and API methods. Then append the `Tech` element in `Player` as a child.
   *
   * @param {string} techName
   *        name of the playback technology
   *
   * @param {string} source
   *        video source
   *
   * @private
   */


  Player.prototype.loadTech_ = function loadTech_(techName, source) {
    var _this2 = this;

    // Pause and remove current playback technology
    if (this.tech_) {
      this.unloadTech_();
    }

    // get rid of the HTML5 video tag as soon as we are using another tech
    if (techName !== 'Html5' && this.tag) {
      _tech2['default'].getTech('Html5').disposeMediaElement(this.tag);
      this.tag.player = null;
      this.tag = null;
    }

    this.techName_ = techName;

    // Turn off API access because we're loading a new tech that might load asynchronously
    this.isReady_ = false;

    // Grab tech-specific options from player options and add source and parent element to use.
    var techOptions = (0, _obj.assign)({
      source: source,
      'nativeControlsForTouch': this.options_.nativeControlsForTouch,
      'playerId': this.id(),
      'techId': this.id() + '_' + techName + '_api',
      'videoTracks': this.videoTracks_,
      'textTracks': this.textTracks_,
      'audioTracks': this.audioTracks_,
      'autoplay': this.options_.autoplay,
      'preload': this.options_.preload,
      'loop': this.options_.loop,
      'muted': this.options_.muted,
      'poster': this.poster(),
      'language': this.language(),
      'playerElIngest': this.playerElIngest_ || false,
      'vtt.js': this.options_['vtt.js']
    }, this.options_[techName.toLowerCase()]);

    if (this.tag) {
      techOptions.tag = this.tag;
    }

    if (source) {
      this.currentType_ = source.type;

      if (source.src === this.cache_.src && this.cache_.currentTime > 0) {
        techOptions.startTime = this.cache_.currentTime;
      }

      this.cache_.sources = null;
      this.cache_.source = source;
      this.cache_.src = source.src;
    }

    // Initialize tech instance
    var TechComponent = _tech2['default'].getTech(techName);

    // Support old behavior of techs being registered as components.
    // Remove once that deprecated behavior is removed.
    if (!TechComponent) {
      TechComponent = _component2['default'].getComponent(techName);
    }
    this.tech_ = new TechComponent(techOptions);

    // player.triggerReady is always async, so don't need this to be async
    this.tech_.ready(Fn.bind(this, this.handleTechReady_), true);

    _textTrackListConverter2['default'].jsonToTextTracks(this.textTracksJson_ || [], this.tech_);

    // Listen to all HTML5-defined events and trigger them on the player
    TECH_EVENTS_RETRIGGER.forEach(function (event) {
      _this2.on(_this2.tech_, event, _this2['handleTech' + (0, _toTitleCase2['default'])(event) + '_']);
    });
    this.on(this.tech_, 'loadstart', this.handleTechLoadStart_);
    this.on(this.tech_, 'waiting', this.handleTechWaiting_);
    this.on(this.tech_, 'canplay', this.handleTechCanPlay_);
    this.on(this.tech_, 'canplaythrough', this.handleTechCanPlayThrough_);
    this.on(this.tech_, 'playing', this.handleTechPlaying_);
    this.on(this.tech_, 'ended', this.handleTechEnded_);
    this.on(this.tech_, 'seeking', this.handleTechSeeking_);
    this.on(this.tech_, 'seeked', this.handleTechSeeked_);
    this.on(this.tech_, 'play', this.handleTechPlay_);
    this.on(this.tech_, 'firstplay', this.handleTechFirstPlay_);
    this.on(this.tech_, 'pause', this.handleTechPause_);
    this.on(this.tech_, 'durationchange', this.handleTechDurationChange_);
    this.on(this.tech_, 'fullscreenchange', this.handleTechFullscreenChange_);
    this.on(this.tech_, 'error', this.handleTechError_);
    this.on(this.tech_, 'loadedmetadata', this.updateStyleEl_);
    this.on(this.tech_, 'posterchange', this.handleTechPosterChange_);
    this.on(this.tech_, 'textdata', this.handleTechTextData_);

    this.usingNativeControls(this.techGet_('controls'));

    if (this.controls() && !this.usingNativeControls()) {
      this.addTechControlsListeners_();
    }

    // Add the tech element in the DOM if it was not already there
    // Make sure to not insert the original video element if using Html5
    if (this.tech_.el().parentNode !== this.el() && (techName !== 'Html5' || !this.tag)) {
      Dom.insertElFirst(this.tech_.el(), this.el());
    }

    // Get rid of the original video tag reference after the first tech is loaded
    if (this.tag) {
      this.tag.player = null;
      this.tag = null;
    }
  };

  /**
   * Unload and dispose of the current playback {@link Tech}.
   *
   * @private
   */


  Player.prototype.unloadTech_ = function unloadTech_() {
    // Save the current text tracks so that we can reuse the same text tracks with the next tech
    this.videoTracks_ = this.videoTracks();
    this.textTracks_ = this.textTracks();
    this.audioTracks_ = this.audioTracks();
    this.textTracksJson_ = _textTrackListConverter2['default'].textTracksToJson(this.tech_);

    this.isReady_ = false;

    this.tech_.dispose();

    this.tech_ = false;
  };

  /**
   * Return a reference to the current {@link Tech}, but only if given an object with the
   * `IWillNotUseThisInPlugins` property having a true value. This is try and prevent misuse
   * of techs by plugins.
   *
   * @param {Object} safety
   *        An object that must contain `{IWillNotUseThisInPlugins: true}`
   *
   * @param {boolean} safety.IWillNotUseThisInPlugins
   *        Must be set to true or else this function will throw an error.
   *
   * @return {Tech}
   *         The Tech
   */


  Player.prototype.tech = function tech(safety) {
    if (safety && safety.IWillNotUseThisInPlugins) {
      return this.tech_;
    }
    var errorText = '\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ';

    _window2['default'].alert(errorText);
    throw new Error(errorText);
  };

  /**
   * Set up click and touch listeners for the playback element
   *
   * - On desktops: a click on the video itself will toggle playback
   * - On mobile devices: a click on the video toggles controls
   *   which is done by toggling the user state between active and
   *   inactive
   * - A tap can signal that a user has become active or has become inactive
   *   e.g. a quick tap on an iPhone movie should reveal the controls. Another
   *   quick tap should hide them again (signaling the user is in an inactive
   *   viewing state)
   * - In addition to this, we still want the user to be considered inactive after
   *   a few seconds of inactivity.
   *
   * > Note: the only part of iOS interaction we can't mimic with this setup
   * is a touch and hold on the video element counting as activity in order to
   * keep the controls showing, but that shouldn't be an issue. A touch and hold
   * on any controls will still keep the user active
   *
   * @private
   */


  Player.prototype.addTechControlsListeners_ = function addTechControlsListeners_() {
    // Make sure to remove all the previous listeners in case we are called multiple times.
    this.removeTechControlsListeners_();

    // Some browsers (Chrome & IE) don't trigger a click on a flash swf, but do
    // trigger mousedown/up.
    // http://stackoverflow.com/questions/1444562/javascript-onclick-event-over-flash-object
    // Any touch events are set to block the mousedown event from happening
    this.on(this.tech_, 'mousedown', this.handleTechClick_);

    // If the controls were hidden we don't want that to change without a tap event
    // so we'll check if the controls were already showing before reporting user
    // activity
    this.on(this.tech_, 'touchstart', this.handleTechTouchStart_);
    this.on(this.tech_, 'touchmove', this.handleTechTouchMove_);
    this.on(this.tech_, 'touchend', this.handleTechTouchEnd_);

    // The tap listener needs to come after the touchend listener because the tap
    // listener cancels out any reportedUserActivity when setting userActive(false)
    this.on(this.tech_, 'tap', this.handleTechTap_);
  };

  /**
   * Remove the listeners used for click and tap controls. This is needed for
   * toggling to controls disabled, where a tap/touch should do nothing.
   *
   * @private
   */


  Player.prototype.removeTechControlsListeners_ = function removeTechControlsListeners_() {
    // We don't want to just use `this.off()` because there might be other needed
    // listeners added by techs that extend this.
    this.off(this.tech_, 'tap', this.handleTechTap_);
    this.off(this.tech_, 'touchstart', this.handleTechTouchStart_);
    this.off(this.tech_, 'touchmove', this.handleTechTouchMove_);
    this.off(this.tech_, 'touchend', this.handleTechTouchEnd_);
    this.off(this.tech_, 'mousedown', this.handleTechClick_);
  };

  /**
   * Player waits for the tech to be ready
   *
   * @private
   */


  Player.prototype.handleTechReady_ = function handleTechReady_() {
    this.triggerReady();

    // Keep the same volume as before
    if (this.cache_.volume) {
      this.techCall_('setVolume', this.cache_.volume);
    }

    // Look if the tech found a higher resolution poster while loading
    this.handleTechPosterChange_();

    // Update the duration if available
    this.handleTechDurationChange_();

    // Chrome and Safari both have issues with autoplay.
    // In Safari (5.1.1), when we move the video element into the container div, autoplay doesn't work.
    // In Chrome (15), if you have autoplay + a poster + no controls, the video gets hidden (but audio plays)
    // This fixes both issues. Need to wait for API, so it updates displays correctly
    if ((this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) {
      try {
        // Chrome Fix. Fixed in Chrome v16.
        delete this.tag.poster;
      } catch (e) {
        (0, _log2['default'])('deleting tag.poster throws in some browsers', e);
      }
      this.play();
    }
  };

  /**
   * Retrigger the `loadstart` event that was triggered by the {@link Tech}. This
   * function will also trigger {@link Player#firstplay} if it is the first loadstart
   * for a video.
   *
   * @fires Player#loadstart
   * @fires Player#firstplay
   * @listens Tech#loadstart
   * @private
   */


  Player.prototype.handleTechLoadStart_ = function handleTechLoadStart_() {
    // TODO: Update to use `emptied` event instead. See #1277.

    this.removeClass('vjs-ended');
    this.removeClass('vjs-seeking');

    // reset the error state
    this.error(null);

    // If it's already playing we want to trigger a firstplay event now.
    // The firstplay event relies on both the play and loadstart events
    // which can happen in any order for a new source
    if (!this.paused()) {
      /**
       * Fired when the user agent begins looking for media data
       *
       * @event Player#loadstart
       * @type {EventTarget~Event}
       */
      this.trigger('loadstart');
      this.trigger('firstplay');
    } else {
      // reset the hasStarted state
      this.hasStarted(false);
      this.trigger('loadstart');
    }
  };

  /**
   * Add/remove the vjs-has-started class
   *
   * @fires Player#firstplay
   *
   * @param {boolean} hasStarted
   *        - true: adds the class
   *        - false: remove the class
   *
   * @return {boolean}
   *         the boolean value of hasStarted
   */


  Player.prototype.hasStarted = function hasStarted(_hasStarted) {
    if (_hasStarted !== undefined) {
      // only update if this is a new value
      if (this.hasStarted_ !== _hasStarted) {
        this.hasStarted_ = _hasStarted;
        if (_hasStarted) {
          this.addClass('vjs-has-started');
          // trigger the firstplay event if this newly has played
          this.trigger('firstplay');
        } else {
          this.removeClass('vjs-has-started');
        }
      }
      return this;
    }
    return !!this.hasStarted_;
  };

  /**
   * Fired whenever the media begins or resumes playback
   *
   * @see [Spec]{@link https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-play}
   * @fires Player#play
   * @listens Tech#play
   * @private
   */


  Player.prototype.handleTechPlay_ = function handleTechPlay_() {
    this.removeClass('vjs-ended');
    this.removeClass('vjs-paused');
    this.addClass('vjs-playing');

    // hide the poster when the user hits play
    this.hasStarted(true);
    /**
     * Triggered whenever an {@link Tech#play} event happens. Indicates that
     * playback has started or resumed.
     *
     * @event Player#play
     * @type {EventTarget~Event}
     */
    this.trigger('play');
  };

  /**
   * Retrigger the `waiting` event that was triggered by the {@link Tech}.
   *
   * @fires Player#waiting
   * @listens Tech#waiting
   * @private
   */


  Player.prototype.handleTechWaiting_ = function handleTechWaiting_() {
    var _this3 = this;

    this.addClass('vjs-waiting');
    /**
     * A readyState change on the DOM element has caused playback to stop.
     *
     * @event Player#waiting
     * @type {EventTarget~Event}
     */
    this.trigger('waiting');
    this.one('timeupdate', function () {
      return _this3.removeClass('vjs-waiting');
    });
  };

  /**
   * Retrigger the `canplay` event that was triggered by the {@link Tech}.
   * > Note: This is not consistent between browsers. See #1351
   *
   * @fires Player#canplay
   * @listens Tech#canplay
   * @private
   */


  Player.prototype.handleTechCanPlay_ = function handleTechCanPlay_() {
    this.removeClass('vjs-waiting');
    /**
     * The media has a readyState of HAVE_FUTURE_DATA or greater.
     *
     * @event Player#canplay
     * @type {EventTarget~Event}
     */
    this.trigger('canplay');
  };

  /**
   * Retrigger the `canplaythrough` event that was triggered by the {@link Tech}.
   *
   * @fires Player#canplaythrough
   * @listens Tech#canplaythrough
   * @private
   */


  Player.prototype.handleTechCanPlayThrough_ = function handleTechCanPlayThrough_() {
    this.removeClass('vjs-waiting');
    /**
     * The media has a readyState of HAVE_ENOUGH_DATA or greater. This means that the
     * entire media file can be played without buffering.
     *
     * @event Player#canplaythrough
     * @type {EventTarget~Event}
     */
    this.trigger('canplaythrough');
  };

  /**
   * Retrigger the `playing` event that was triggered by the {@link Tech}.
   *
   * @fires Player#playing
   * @listens Tech#playing
   * @private
   */


  Player.prototype.handleTechPlaying_ = function handleTechPlaying_() {
    this.removeClass('vjs-waiting');
    /**
     * The media is no longer blocked from playback, and has started playing.
     *
     * @event Player#playing
     * @type {EventTarget~Event}
     */
    this.trigger('playing');
  };

  /**
   * Retrigger the `seeking` event that was triggered by the {@link Tech}.
   *
   * @fires Player#seeking
   * @listens Tech#seeking
   * @private
   */


  Player.prototype.handleTechSeeking_ = function handleTechSeeking_() {
    this.addClass('vjs-seeking');
    /**
     * Fired whenever the player is jumping to a new time
     *
     * @event Player#seeking
     * @type {EventTarget~Event}
     */
    this.trigger('seeking');
  };

  /**
   * Retrigger the `seeked` event that was triggered by the {@link Tech}.
   *
   * @fires Player#seeked
   * @listens Tech#seeked
   * @private
   */


  Player.prototype.handleTechSeeked_ = function handleTechSeeked_() {
    this.removeClass('vjs-seeking');
    /**
     * Fired when the player has finished jumping to a new time
     *
     * @event Player#seeked
     * @type {EventTarget~Event}
     */
    this.trigger('seeked');
  };

  /**
   * Retrigger the `firstplay` event that was triggered by the {@link Tech}.
   *
   * @fires Player#firstplay
   * @listens Tech#firstplay
   * @deprecated As of 6.0 passing the `starttime` option to the player will be deprecated
   * @private
   */


  Player.prototype.handleTechFirstPlay_ = function handleTechFirstPlay_() {
    // If the first starttime attribute is specified
    // then we will start at the given offset in seconds
    if (this.options_.starttime) {
      _log2['default'].warn('Passing the `starttime` option to the player will be deprecated in 6.0');
      this.currentTime(this.options_.starttime);
    }

    this.addClass('vjs-has-started');
    /**
     * Fired the first time a video is played. Not part of the HLS spec, and this is
     * probably not the best implementation yet, so use sparingly. If you don't have a
     * reason to prevent playback, use `myPlayer.one('play');` instead.
     *
     * @event Player#firstplay
     * @type {EventTarget~Event}
     */
    this.trigger('firstplay');
  };

  /**
   * Retrigger the `pause` event that was triggered by the {@link Tech}.
   *
   * @fires Player#pause
   * @listens Tech#pause
   * @private
   */


  Player.prototype.handleTechPause_ = function handleTechPause_() {
    this.removeClass('vjs-playing');
    this.addClass('vjs-paused');
    /**
     * Fired whenever the media has been paused
     *
     * @event Player#pause
     * @type {EventTarget~Event}
     */
    this.trigger('pause');
  };

  /**
   * Retrigger the `ended` event that was triggered by the {@link Tech}.
   *
   * @fires Player#ended
   * @listens Tech#ended
   * @private
   */


  Player.prototype.handleTechEnded_ = function handleTechEnded_() {
    this.addClass('vjs-ended');
    if (this.options_.loop) {
      this.currentTime(0);
      this.play();
    } else if (!this.paused()) {
      this.pause();
    }

    /**
     * Fired when the end of the media resource is reached (currentTime == duration)
     *
     * @event Player#ended
     * @type {EventTarget~Event}
     */
    this.trigger('ended');
  };

  /**
   * Fired when the duration of the media resource is first known or changed
   *
   * @listens Tech#durationchange
   * @private
   */


  Player.prototype.handleTechDurationChange_ = function handleTechDurationChange_() {
    this.duration(this.techGet_('duration'));
  };

  /**
   * Handle a click on the media element to play/pause
   *
   * @param {EventTarget~Event} event
   *        the event that caused this function to trigger
   *
   * @listens Tech#mousedown
   * @private
   */


  Player.prototype.handleTechClick_ = function handleTechClick_(event) {
    // We're using mousedown to detect clicks thanks to Flash, but mousedown
    // will also be triggered with right-clicks, so we need to prevent that
    if (event.button !== 0) {
      return;
    }

    // When controls are disabled a click should not toggle playback because
    // the click is considered a control
    if (this.controls()) {
      if (this.paused()) {
        this.play();
      } else {
        this.pause();
      }
    }
  };

  /**
   * Handle a tap on the media element. It will toggle the user
   * activity state, which hides and shows the controls.
   *
   * @listens Tech#tap
   * @private
   */


  Player.prototype.handleTechTap_ = function handleTechTap_() {
    this.userActive(!this.userActive());
  };

  /**
   * Handle touch to start
   *
   * @listens Tech#touchstart
   * @private
   */


  Player.prototype.handleTechTouchStart_ = function handleTechTouchStart_() {
    this.userWasActive = this.userActive();
  };

  /**
   * Handle touch to move
   *
   * @listens Tech#touchmove
   * @private
   */


  Player.prototype.handleTechTouchMove_ = function handleTechTouchMove_() {
    if (this.userWasActive) {
      this.reportUserActivity();
    }
  };

  /**
   * Handle touch to end
   *
   * @param {EventTarget~Event} event
   *        the touchend event that triggered
   *        this function
   *
   * @listens Tech#touchend
   * @private
   */


  Player.prototype.handleTechTouchEnd_ = function handleTechTouchEnd_(event) {
    // Stop the mouse events from also happening
    event.preventDefault();
  };

  /**
   * Fired when the player switches in or out of fullscreen mode
   *
   * @private
   * @listens Player#fullscreenchange
   */


  Player.prototype.handleFullscreenChange_ = function handleFullscreenChange_() {
    if (this.isFullscreen()) {
      this.addClass('vjs-fullscreen');
    } else {
      this.removeClass('vjs-fullscreen');
    }
  };

  /**
   * native click events on the SWF aren't triggered on IE11, Win8.1RT
   * use stageclick events triggered from inside the SWF instead
   *
   * @private
   * @listens stageclick
   */


  Player.prototype.handleStageClick_ = function handleStageClick_() {
    this.reportUserActivity();
  };

  /**
   * Handle Tech Fullscreen Change
   *
   * @param {EventTarget~Event} event
   *        the fullscreenchange event that triggered this function
   *
   * @param {Object} data
   *        the data that was sent with the event
   *
   * @private
   * @listens Tech#fullscreenchange
   * @fires Player#fullscreenchange
   */


  Player.prototype.handleTechFullscreenChange_ = function handleTechFullscreenChange_(event, data) {
    if (data) {
      this.isFullscreen(data.isFullscreen);
    }
    /**
     * Fired when going in and out of fullscreen.
     *
     * @event Player#fullscreenchange
     * @type {EventTarget~Event}
     */
    this.trigger('fullscreenchange');
  };

  /**
   * Fires when an error occurred during the loading of an audio/video.
   *
   * @private
   * @listens Tech#error
   */


  Player.prototype.handleTechError_ = function handleTechError_() {
    var error = this.tech_.error();

    this.error(error);
  };

  /**
   * Retrigger the `textdata` event that was triggered by the {@link Tech}.
   *
   * @fires Player#textdata
   * @listens Tech#textdata
   * @private
   */


  Player.prototype.handleTechTextData_ = function handleTechTextData_() {
    var data = null;

    if (arguments.length > 1) {
      data = arguments[1];
    }

    /**
     * Fires when we get a textdata event from tech
     *
     * @event Player#textdata
     * @type {EventTarget~Event}
     */
    this.trigger('textdata', data);
  };

  /**
   * Get object for cached values.
   *
   * @return {Object}
   *         get the current object cache
   */


  Player.prototype.getCache = function getCache() {
    return this.cache_;
  };

  /**
   * Pass values to the playback tech
   *
   * @param {string} [method]
   *        the method to call
   *
   * @param {Object} arg
   *        the argument to pass
   *
   * @private
   */


  Player.prototype.techCall_ = function techCall_(method, arg) {
    // If it's not ready yet, call method when it is
    if (this.tech_ && !this.tech_.isReady_) {
      this.tech_.ready(function () {
        this[method](arg);
      }, true);

      // Otherwise call method now
    } else {
      try {
        if (this.tech_) {
          this.tech_[method](arg);
        }
      } catch (e) {
        (0, _log2['default'])(e);
        throw e;
      }
    }
  };

  /**
   * Get calls can't wait for the tech, and sometimes don't need to.
   *
   * @param {string} method
   *        Tech method
   *
   * @return {Function|undefined}
   *         the method or undefined
   *
   * @private
   */


  Player.prototype.techGet_ = function techGet_(method) {
    if (this.tech_ && this.tech_.isReady_) {

      // Flash likes to die and reload when you hide or reposition it.
      // In these cases the object methods go away and we get errors.
      // When that happens we'll catch the errors and inform tech that it's not ready any more.
      try {
        return this.tech_[method]();
      } catch (e) {
        // When building additional tech libs, an expected method may not be defined yet
        if (this.tech_[method] === undefined) {
          (0, _log2['default'])('Video.js: ' + method + ' method not defined for ' + this.techName_ + ' playback technology.', e);

          // When a method isn't available on the object it throws a TypeError
        } else if (e.name === 'TypeError') {
          (0, _log2['default'])('Video.js: ' + method + ' unavailable on ' + this.techName_ + ' playback technology element.', e);
          this.tech_.isReady_ = false;
        } else {
          (0, _log2['default'])(e);
        }
        throw e;
      }
    }

    return;
  };

  /**
   * start media playback
   *
   * @return {Player}
   *         A reference to the player object this function was called on
   */


  Player.prototype.play = function play() {
    // Only calls the tech's play if we already have a src loaded
    if (this.src() || this.currentSrc()) {
      this.techCall_('play');
    } else {
      this.tech_.one('loadstart', function () {
        this.play();
      });
    }

    return this;
  };

  /**
   * Pause the video playback
   *
   * @return {Player}
   *         A reference to the player object this function was called on
   */


  Player.prototype.pause = function pause() {
    this.techCall_('pause');
    return this;
  };

  /**
   * Check if the player is paused or has yet to play
   *
   * @return {boolean}
   *         - false: if the media is currently playing
   *         - true: if media is not currently playing
   */


  Player.prototype.paused = function paused() {
    // The initial state of paused should be true (in Safari it's actually false)
    return this.techGet_('paused') === false ? false : true;
  };

  /**
   * Returns whether or not the user is "scrubbing". Scrubbing is
   * when the user has clicked the progress bar handle and is
   * dragging it along the progress bar.
   *
   * @param {boolean} [isScrubbing]
   *        wether the user is or is not scrubbing
   *
   * @return {boolean|Player}
   *         A instance of the player that called this function when setting,
   *         and the value of scrubbing when getting
   */


  Player.prototype.scrubbing = function scrubbing(isScrubbing) {
    if (isScrubbing !== undefined) {
      this.scrubbing_ = !!isScrubbing;

      if (isScrubbing) {
        this.addClass('vjs-scrubbing');
      } else {
        this.removeClass('vjs-scrubbing');
      }

      return this;
    }

    return this.scrubbing_;
  };

  /**
   * Get or set the current time (in seconds)
   *
   * @param {number|string} [seconds]
   *        The time to seek to in seconds
   *
   * @return {Player|number}
   *         - the current time in seconds when getting
   *         - a reference to the current player object when setting
   */


  Player.prototype.currentTime = function currentTime(seconds) {
    if (seconds !== undefined) {

      this.techCall_('setCurrentTime', seconds);

      return this;
    }

    // cache last currentTime and return. default to 0 seconds
    //
    // Caching the currentTime is meant to prevent a massive amount of reads on the tech's
    // currentTime when scrubbing, but may not provide much performance benefit afterall.
    // Should be tested. Also something has to read the actual current time or the cache will
    // never get updated.
    this.cache_.currentTime = this.techGet_('currentTime') || 0;
    return this.cache_.currentTime;
  };

  /**
   * Normally gets the length in time of the video in seconds;
   * in all but the rarest use cases an argument will NOT be passed to the method
   *
   * > **NOTE**: The video must have started loading before the duration can be
   * known, and in the case of Flash, may not be known until the video starts
   * playing.
   *
   * @fires Player#durationchange
   *
   * @param {number} [seconds]
   *        The duration of the video to set in seconds
   *
   * @return {number|Player}
   *         - The duration of the video in seconds when getting
   *         - A reference to the player that called this function
   *           when setting
   */


  Player.prototype.duration = function duration(seconds) {
    if (seconds === undefined) {
      return this.cache_.duration || 0;
    }

    seconds = parseFloat(seconds) || 0;

    // Standardize on Inifity for signaling video is live
    if (seconds < 0) {
      seconds = Infinity;
    }

    if (seconds !== this.cache_.duration) {
      // Cache the last set value for optimized scrubbing (esp. Flash)
      this.cache_.duration = seconds;

      if (seconds === Infinity) {
        this.addClass('vjs-live');
      } else {
        this.removeClass('vjs-live');
      }
      /**
       * @event Player#durationchange
       * @type {EventTarget~Event}
       */
      this.trigger('durationchange');
    }

    return this;
  };

  /**
   * Calculates how much time is left in the video. Not part
   * of the native video API.
   *
   * @return {number}
   *         The time remaining in seconds
   */


  Player.prototype.remainingTime = function remainingTime() {
    return this.duration() - this.currentTime();
  };

  //
  // Kind of like an array of portions of the video that have been downloaded.

  /**
   * Get a TimeRange object with an array of the times of the video
   * that have been downloaded. If you just want the percent of the
   * video that's been downloaded, use bufferedPercent.
   *
   * @see [Buffered Spec]{@link http://dev.w3.org/html5/spec/video.html#dom-media-buffered}
   *
   * @return {TimeRange}
   *         A mock TimeRange object (following HTML spec)
   */


  Player.prototype.buffered = function buffered() {
    var buffered = this.techGet_('buffered');

    if (!buffered || !buffered.length) {
      buffered = (0, _timeRanges.createTimeRange)(0, 0);
    }

    return buffered;
  };

  /**
   * Get the percent (as a decimal) of the video that's been downloaded.
   * This method is not a part of the native HTML video API.
   *
   * @return {number}
   *         A decimal between 0 and 1 representing the percent
   *         that is bufferred 0 being 0% and 1 being 100%
   */


  Player.prototype.bufferedPercent = function bufferedPercent() {
    return (0, _buffer.bufferedPercent)(this.buffered(), this.duration());
  };

  /**
   * Get the ending time of the last buffered time range
   * This is used in the progress bar to encapsulate all time ranges.
   *
   * @return {number}
   *         The end of the last buffered time range
   */


  Player.prototype.bufferedEnd = function bufferedEnd() {
    var buffered = this.buffered();
    var duration = this.duration();
    var end = buffered.end(buffered.length - 1);

    if (end > duration) {
      end = duration;
    }

    return end;
  };

  /**
   * Get or set the current volume of the media
   *
   * @param  {number} [percentAsDecimal]
   *         The new volume as a decimal percent:
   *         - 0 is muted/0%/off
   *         - 1.0 is 100%/full
   *         - 0.5 is half volume or 50%
   *
   * @return {Player|number}
   *         a reference to the calling player when setting and the
   *         current volume as a percent when getting
   */


  Player.prototype.volume = function volume(percentAsDecimal) {
    var vol = void 0;

    if (percentAsDecimal !== undefined) {
      // Force value to between 0 and 1
      vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal)));
      this.cache_.volume = vol;
      this.techCall_('setVolume', vol);

      return this;
    }

    // Default to 1 when returning current volume.
    vol = parseFloat(this.techGet_('volume'));
    return isNaN(vol) ? 1 : vol;
  };

  /**
   * Get the current muted state, or turn mute on or off
   *
   * @param {boolean} [muted]
   *        - true to mute
   *        - false to unmute
   *
   * @return {boolean|Player}
   *         - true if mute is on and getting
   *         - false if mute is off and getting
   *         - A reference to the current player when setting
   */


  Player.prototype.muted = function muted(_muted) {
    if (_muted !== undefined) {
      this.techCall_('setMuted', _muted);
      return this;
    }
    return this.techGet_('muted') || false;
  };

  /**
   * Check if current tech can support native fullscreen
   * (e.g. with built in controls like iOS, so not our flash swf)
   *
   * @return {boolean}
   *         if native fullscreen is supported
   */


  Player.prototype.supportsFullScreen = function supportsFullScreen() {
    return this.techGet_('supportsFullScreen') || false;
  };

  /**
   * Check if the player is in fullscreen mode or tell the player that it
   * is or is not in fullscreen mode.
   *
   * > NOTE: As of the latest HTML5 spec, isFullscreen is no longer an official
   * property and instead document.fullscreenElement is used. But isFullscreen is
   * still a valuable property for internal player workings.
   *
   * @param  {boolean} [isFS]
   *         Set the players current fullscreen state
   *
   * @return {boolean|Player}
   *         - true if fullscreen is on and getting
   *         - false if fullscreen is off and getting
   *         - A reference to the current player when setting
   */


  Player.prototype.isFullscreen = function isFullscreen(isFS) {
    if (isFS !== undefined) {
      this.isFullscreen_ = !!isFS;
      return this;
    }
    return !!this.isFullscreen_;
  };

  /**
   * Increase the size of the video to full screen
   * In some browsers, full screen is not supported natively, so it enters
   * "full window mode", where the video fills the browser window.
   * In browsers and devices that support native full screen, sometimes the
   * browser's default controls will be shown, and not the Video.js custom skin.
   * This includes most mobile devices (iOS, Android) and older versions of
   * Safari.
   *
   * @fires Player#fullscreenchange
   * @return {Player}
   *         A reference to the current player
   */


  Player.prototype.requestFullscreen = function requestFullscreen() {
    var fsApi = _fullscreenApi2['default'];

    this.isFullscreen(true);

    if (fsApi.requestFullscreen) {
      // the browser supports going fullscreen at the element level so we can
      // take the controls fullscreen as well as the video

      // Trigger fullscreenchange event after change
      // We have to specifically add this each time, and remove
      // when canceling fullscreen. Otherwise if there's multiple
      // players on a page, they would all be reacting to the same fullscreen
      // events
      Events.on(_document2['default'], fsApi.fullscreenchange, Fn.bind(this, function documentFullscreenChange(e) {
        this.isFullscreen(_document2['default'][fsApi.fullscreenElement]);

        // If cancelling fullscreen, remove event listener.
        if (this.isFullscreen() === false) {
          Events.off(_document2['default'], fsApi.fullscreenchange, documentFullscreenChange);
        }
        /**
         * @event Player#fullscreenchange
         * @type {EventTarget~Event}
         */
        this.trigger('fullscreenchange');
      }));

      this.el_[fsApi.requestFullscreen]();
    } else if (this.tech_.supportsFullScreen()) {
      // we can't take the video.js controls fullscreen but we can go fullscreen
      // with native controls
      this.techCall_('enterFullScreen');
    } else {
      // fullscreen isn't supported so we'll just stretch the video element to
      // fill the viewport
      this.enterFullWindow();
      /**
       * @event Player#fullscreenchange
       * @type {EventTarget~Event}
       */
      this.trigger('fullscreenchange');
    }

    return this;
  };

  /**
   * Return the video to its normal size after having been in full screen mode
   *
   * @fires Player#fullscreenchange
   *
   * @return {Player}
   *         A reference to the current player
   */


  Player.prototype.exitFullscreen = function exitFullscreen() {
    var fsApi = _fullscreenApi2['default'];

    this.isFullscreen(false);

    // Check for browser element fullscreen support
    if (fsApi.requestFullscreen) {
      _document2['default'][fsApi.exitFullscreen]();
    } else if (this.tech_.supportsFullScreen()) {
      this.techCall_('exitFullScreen');
    } else {
      this.exitFullWindow();
      /**
       * @event Player#fullscreenchange
       * @type {EventTarget~Event}
       */
      this.trigger('fullscreenchange');
    }

    return this;
  };

  /**
   * When fullscreen isn't supported we can stretch the
   * video container to as wide as the browser will let us.
   *
   * @fires Player#enterFullWindow
   */


  Player.prototype.enterFullWindow = function enterFullWindow() {
    this.isFullWindow = true;

    // Storing original doc overflow value to return to when fullscreen is off
    this.docOrigOverflow = _document2['default'].documentElement.style.overflow;

    // Add listener for esc key to exit fullscreen
    Events.on(_document2['default'], 'keydown', Fn.bind(this, this.fullWindowOnEscKey));

    // Hide any scroll bars
    _document2['default'].documentElement.style.overflow = 'hidden';

    // Apply fullscreen styles
    Dom.addElClass(_document2['default'].body, 'vjs-full-window');

    /**
     * @event Player#enterFullWindow
     * @type {EventTarget~Event}
     */
    this.trigger('enterFullWindow');
  };

  /**
   * Check for call to either exit full window or
   * full screen on ESC key
   *
   * @param {string} event
   *        Event to check for key press
   */


  Player.prototype.fullWindowOnEscKey = function fullWindowOnEscKey(event) {
    if (event.keyCode === 27) {
      if (this.isFullscreen() === true) {
        this.exitFullscreen();
      } else {
        this.exitFullWindow();
      }
    }
  };

  /**
   * Exit full window
   *
   * @fires Player#exitFullWindow
   */


  Player.prototype.exitFullWindow = function exitFullWindow() {
    this.isFullWindow = false;
    Events.off(_document2['default'], 'keydown', this.fullWindowOnEscKey);

    // Unhide scroll bars.
    _document2['default'].documentElement.style.overflow = this.docOrigOverflow;

    // Remove fullscreen styles
    Dom.removeElClass(_document2['default'].body, 'vjs-full-window');

    // Resize the box, controller, and poster to original sizes
    // this.positionAll();
    /**
     * @event Player#exitFullWindow
     * @type {EventTarget~Event}
     */
    this.trigger('exitFullWindow');
  };

  /**
   * Check whether the player can play a given mimetype
   *
   * @see https://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-navigator-canplaytype
   *
   * @param {string} type
   *        The mimetype to check
   *
   * @return {string}
   *         'probably', 'maybe', or '' (empty string)
   */


  Player.prototype.canPlayType = function canPlayType(type) {
    var can = void 0;

    // Loop through each playback technology in the options order
    for (var i = 0, j = this.options_.techOrder; i < j.length; i++) {
      var techName = (0, _toTitleCase2['default'])(j[i]);
      var tech = _tech2['default'].getTech(techName);

      // Support old behavior of techs being registered as components.
      // Remove once that deprecated behavior is removed.
      if (!tech) {
        tech = _component2['default'].getComponent(techName);
      }

      // Check if the current tech is defined before continuing
      if (!tech) {
        _log2['default'].error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
        continue;
      }

      // Check if the browser supports this technology
      if (tech.isSupported()) {
        can = tech.canPlayType(type);

        if (can) {
          return can;
        }
      }
    }

    return '';
  };

  /**
   * Select source based on tech-order or source-order
   * Uses source-order selection if `options.sourceOrder` is truthy. Otherwise,
   * defaults to tech-order selection
   *
   * @param {Array} sources
   *        The sources for a media asset
   *
   * @return {Object|boolean}
   *         Object of source and tech order or false
   */


  Player.prototype.selectSource = function selectSource(sources) {
    var _this4 = this;

    // Get only the techs specified in `techOrder` that exist and are supported by the
    // current platform
    var techs = this.options_.techOrder.map(_toTitleCase2['default']).map(function (techName) {
      // `Component.getComponent(...)` is for support of old behavior of techs
      // being registered as components.
      // Remove once that deprecated behavior is removed.
      return [techName, _tech2['default'].getTech(techName) || _component2['default'].getComponent(techName)];
    }).filter(function (_ref) {
      var techName = _ref[0],
          tech = _ref[1];

      // Check if the current tech is defined before continuing
      if (tech) {
        // Check if the browser supports this technology
        return tech.isSupported();
      }

      _log2['default'].error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
      return false;
    });

    // Iterate over each `innerArray` element once per `outerArray` element and execute
    // `tester` with both. If `tester` returns a non-falsy value, exit early and return
    // that value.
    var findFirstPassingTechSourcePair = function findFirstPassingTechSourcePair(outerArray, innerArray, tester) {
      var found = void 0;

      outerArray.some(function (outerChoice) {
        return innerArray.some(function (innerChoice) {
          found = tester(outerChoice, innerChoice);

          if (found) {
            return true;
          }
        });
      });

      return found;
    };

    var foundSourceAndTech = void 0;
    var flip = function flip(fn) {
      return function (a, b) {
        return fn(b, a);
      };
    };
    var finder = function finder(_ref2, source) {
      var techName = _ref2[0],
          tech = _ref2[1];

      if (tech.canPlaySource(source, _this4.options_[techName.toLowerCase()])) {
        return { source: source, tech: techName };
      }
    };

    // Depending on the truthiness of `options.sourceOrder`, we swap the order of techs and sources
    // to select from them based on their priority.
    if (this.options_.sourceOrder) {
      // Source-first ordering
      foundSourceAndTech = findFirstPassingTechSourcePair(sources, techs, flip(finder));
    } else {
      // Tech-first ordering
      foundSourceAndTech = findFirstPassingTechSourcePair(techs, sources, finder);
    }

    return foundSourceAndTech || false;
  };

  /**
   * The source function updates the video source
   * There are three types of variables you can pass as the argument.
   * **URL string**: A URL to the the video file. Use this method if you are sure
   * the current playback technology (HTML5/Flash) can support the source you
   * provide. Currently only MP4 files can be used in both HTML5 and Flash.
   *
   * @pa