/**
 * Auto-generated action file for "Container Analysis" API.
 *
 * Generated at: 2019-05-23T09:13:14.482Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-containeranalysis-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'containeranalysis.projects.occurrences.create'
 * Endpoint Path: '/v1beta1/{parent}/occurrences'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "parent",
    "access_token",
    "alt",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "parent": "parent",
    "access_token": "access_token",
    "alt": "alt",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "contentType": "contentType",
    "pgpKeyId": "pgpKeyId",
    "signature": "signature",
    "pgpSignedAttestation": "pgpSignedAttestation",
    "attestation": "attestation",
    "buildOptions": "buildOptions",
    "builderVersion": "builderVersion",
    "builtArtifacts": "builtArtifacts",
    "commands": "commands",
    "createTime": "createTime",
    "creator": "creator",
    "endTime": "endTime",
    "id": "id",
    "logsUri": "logsUri",
    "projectId": "projectId",
    "additionalContexts": "additionalContexts",
    "artifactStorageSourceUri": "artifactStorageSourceUri",
    "kind": "kind",
    "name": "name",
    "aliasContext": "aliasContext",
    "repoName": "repoName",
    "projectRepoId": "projectRepoId",
    "uid": "uid",
    "repoId": "repoId",
    "revisionId": "revisionId",
    "cloudRepo": "cloudRepo",
    "gerritProject": "gerritProject",
    "hostUri": "hostUri",
    "gerrit": "gerrit",
    "url": "url",
    "git": "git",
    "labels": "labels",
    "context": "context",
    "fileHashes": "fileHashes",
    "sourceProvenance": "sourceProvenance",
    "startTime": "startTime",
    "triggerId": "triggerId",
    "provenance": "provenance",
    "provenanceBytes": "provenanceBytes",
    "build": "build",
    "address": "address",
    "config": "config",
    "deployTime": "deployTime",
    "platform": "platform",
    "resourceUri": "resourceUri",
    "undeployTime": "undeployTime",
    "userEmail": "userEmail",
    "deployment": "deployment",
    "baseResourceUrl": "baseResourceUrl",
    "distance": "distance",
    "v1Name": "v1Name",
    "v2Blob": "v2Blob",
    "v2Name": "v2Name",
    "fingerprint": "fingerprint",
    "layerInfo": "layerInfo",
    "derivedImage": "derivedImage",
    "analysisStatus": "analysisStatus",
    "code": "code",
    "details": "details",
    "message": "message",
    "analysisStatusError": "analysisStatusError",
    "continuousAnalysis": "continuousAnalysis",
    "lastAnalysisTime": "lastAnalysisTime",
    "discovered": "discovered",
    "location": "location",
    "installation": "installation",
    "noteName": "noteName",
    "remediation": "remediation",
    "type": "type",
    "value": "value",
    "contentHash": "contentHash",
    "uri": "uri",
    "resource": "resource",
    "updateTime": "updateTime",
    "cvssScore": "cvssScore",
    "effectiveSeverity": "effectiveSeverity",
    "longDescription": "longDescription",
    "packageIssue": "packageIssue",
    "relatedUrls": "relatedUrls",
    "severity": "severity",
    "shortDescription": "shortDescription",
    "vulnerability": "vulnerability",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'containeranalysis.projects.occurrences.create',
        pathName: '/v1beta1/{parent}/occurrences',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}