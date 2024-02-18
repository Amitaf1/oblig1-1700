"use strict";
let allTickets = [];
const ticketText = document.getElementById("billetter");
function saveInput() {
    const ticket = {
            film : document.getElementById("film"),
            amount : document.getElementById("amount"),
            fname : document.getElementById("fname"),
            lname : document.getElementById("lname"),
            telnr : document.getElementById("telnr"),
            email : document.getElementById("email"),
        },
        namePattern   = /^[a-zA-Z\s]+$/,
        telPattern    = /^\d{8}$/,
        emailPattern  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let error = false;

    if (ticket.film.value !== "Little Women" &&
        ticket.film.value !== "Imagine Me & You (2005)" &&
        ticket.film.value !== "Puss in Boots: The Last Wish" &&
        ticket.film.value !== "Barbie" &&
        ticket.film.value !== "Kill Bill: Volume 1 (2003)" &&
        ticket.film.value !== "Mean Girls" &&
        ticket.film.value !== "The Boy and the Heron" &&
        ticket.film.value !== "Goodfellas (1990)"
    ) {
        const text = ticket.film.value === "" || ticket.film.value === null
            ? "Du må velge noe"
            : "Ugyldig film!";
        let errMsg = document.getElementById("filmError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "filmError";
        }
        errMsg.textContent = text;
        ticket.film.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("filmError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }
    if (!isFinite(ticket.amount.value) || !ticket.amount.value) {
        const text = ticket.amount.value === "" || ticket.amount.value === null
            ? "Du må fylle feltet ut"
            : "Ugyldig antall billetter!";
        let errMsg = document.getElementById("amountError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "amountError";
        }
        errMsg.textContent = text;
        ticket.amount.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("amountError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }
    if (!namePattern.test(ticket.fname.value)) {
        const text = ticket.fname.value === "" || ticket.fname.value === null
            ? "Du må fylle feltet ut"
            : "Ugyldig fornavn!";
        let errMsg = document.getElementById("fnameError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "fnameError";
        }
        errMsg.textContent = text;
        ticket.fname.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("fnameError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }
    if (!namePattern.test(ticket.lname.value)) {
        const text = ticket.lname.value === "" || ticket.lname.value === null
            ? "Du må fylle feltet ut"
            : "Ugyldig etternavn!";
        let lnameErr = document.getElementById("lnameError");
        if (lnameErr === null) {
            lnameErr = document.createElement("span");
            lnameErr.id = "lnameError";
        }
        lnameErr.textContent = text;
        ticket.lname.after(lnameErr);
        error = true;
    } else {
        const lnameErr = document.getElementById("lnameError");
        if (lnameErr !== null && lnameErr.parentNode) {
            lnameErr.parentNode.removeChild(lnameErr);
        }
    }
    if (!telPattern.test(ticket.telnr.value)) {
        const text = ticket.telnr.value === "" || ticket.telnr.value === null
            ? "Du må fylle feltet ut"
            : "Ugyldig telefonnummer!";
        let errMsg = document.getElementById("telnrError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "telnrError";
        }
        errMsg.textContent = text;
        ticket.telnr.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("telnrError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }
    if (!emailPattern.test(ticket.email.value)) {
        const text = ticket.email.value === "" || ticket.email.value === null
            ? "Du må fylle feltet ut"
            : "E-post adressen er ugyldig!";
        let errMsg = document.getElementById("emailError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "emailError";
        }
        errMsg.textContent = text;
        ticket.email.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("emailError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }
    if (!error) {
        allTickets.push(ticket);
        const text = `
            ${ticket.film.value},
            ${ticket.amount.value},
            ${ticket.fname.value},
            ${ticket.lname.value},
            ${ticket.telnr.value},
            ${ticket.email.value}`;
        const displayText = document.createElement("p");
        displayText.appendChild(document.createTextNode(text));
        ticketText.appendChild(displayText);
    }
}
function deleteAll() {
    allTickets = [];
    ticketText.textContent = "";
}