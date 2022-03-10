/// <reference types="cypress" />

describe('CaseStudyApi', function () {
    it('trial', function () {
        cy.request({
            method: "POST",
            url: "https://api.github.com/gists/1ab8849f6c97e0e6596bec265455d6ca/comments",
            body: "Test messages",
            headers: {
                "Accept": "application/vnd.github.v3+json",
                'Authorization': 'Basic QWJpdGh1cjpnaHBfSlVBa3hTSmlMS3dWSnhkc0ZPNE1OMkZRYXhMRWVqMHNRc1VtCg=='
            }
        }).then(function (response) {
            console.log(response.body);
        })
    })
})