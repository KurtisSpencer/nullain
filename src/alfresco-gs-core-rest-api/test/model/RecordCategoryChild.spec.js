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
    instance = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
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

  describe('RecordCategoryChild', function() {
    it('should create an instance of RecordCategoryChild', function() {
      // uncomment below and update the code to test RecordCategoryChild
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be.a(AlfrescoGovernanceServicesRestApi.RecordCategoryChild);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property nodeType (base name: "nodeType")', function() {
      // uncomment below and update the code to test the property nodeType
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property hasRetentionSchedule (base name: "hasRetentionSchedule")', function() {
      // uncomment below and update the code to test the property hasRetentionSchedule
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property isClosed (base name: "isClosed")', function() {
      // uncomment below and update the code to test the property isClosed
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property isRecordCategory (base name: "isRecordCategory")', function() {
      // uncomment below and update the code to test the property isRecordCategory
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property isRecordFolder (base name: "isRecordFolder")', function() {
      // uncomment below and update the code to test the property isRecordFolder
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property modifiedAt (base name: "modifiedAt")', function() {
      // uncomment below and update the code to test the property modifiedAt
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property modifiedByUser (base name: "modifiedByUser")', function() {
      // uncomment below and update the code to test the property modifiedByUser
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property createdByUser (base name: "createdByUser")', function() {
      // uncomment below and update the code to test the property createdByUser
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property aspectNames (base name: "aspectNames")', function() {
      // uncomment below and update the code to test the property aspectNames
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property allowableOperations (base name: "allowableOperations")', function() {
      // uncomment below and update the code to test the property allowableOperations
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new AlfrescoGovernanceServicesRestApi.RecordCategoryChild();
      //expect(instance).to.be();
    });

  });

}));
