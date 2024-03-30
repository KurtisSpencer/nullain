/**
 * Alfresco Governance Services REST API
 * **GS Core API**  Provides access to the core features of Alfresco Governance Services. 
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AlfrescoGovernanceServicesRestApi);
  }
}(this, function(expect, AlfrescoGovernanceServicesRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FilePlanComponentBodyUpdate', function() {
    it('should create an instance of FilePlanComponentBodyUpdate', function() {
      // uncomment below and update the code to test FilePlanComponentBodyUpdate
      //var instane = new AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate();
      //expect(instance).to.be.a(AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate();
      //expect(instance).to.be();
    });

    it('should have the property aspectNames (base name: "aspectNames")', function() {
      // uncomment below and update the code to test the property aspectNames
      //var instane = new AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instane = new AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate();
      //expect(instance).to.be();
    });

  });

}));
