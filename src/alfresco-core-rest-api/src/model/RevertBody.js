(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RevertBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RevertBody model module.
   * @module model/RevertBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RevertBody</code>.
   * @alias module:model/RevertBody
   * @class
   * @param content
   */
  var exports = function(majorVersion, comment) {
    this['majorVersion'] = majorVersion;
    this['comment'] = comment;
  };

  /**
   * Constructs a <code>RevertBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RevertBody} obj Optional instance to populate.
   * @return {module:model/RevertBody} The populated <code>RevertBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('majorVersion')) {
        obj['majorVersion'] = ApiClient.convertToType(data['majorVersion'], 'Boolean');
      }

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} majorVersion
   */
  exports.prototype['majorVersion'] = undefined;

  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;

  return exports;
}));
