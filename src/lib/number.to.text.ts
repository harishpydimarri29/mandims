export default function number2text(value: number) {
    let fraction = Math.round(frac(value) * 100);
    let f_text = "";

    if (fraction > 0) {
        f_text = "AND " + convert_number(fraction) + " PAISE";
    }

    return convert_number(value) + " RUPEES " + f_text + " ONLY";
}

function frac(f: number) {
    return f % 1;
}

function convert_number(value: number) {
    if ((value < 0) || (value > 999999999)) {
        return "NUMBER OUT OF RANGE!";
    }
    let Gn = Math.floor(value / 10000000);  /* Crore */
    value -= Gn * 10000000;
    let kn = Math.floor(value / 100000);     /* lakhs */
    value -= kn * 100000;
    let Hn = Math.floor(value / 1000);      /* thousand */
    value -= Hn * 1000;
    let Dn = Math.floor(value / 100);       /* Tens (deca) */
    value = value % 100;               /* Ones */
    let tn = Math.floor(value / 10);
    let one = Math.floor(value % 10);
    let res = "";

    if (Gn > 0) {
        res += (convert_number(Gn) + " CRORE");
    }
    if (kn > 0) {
        res += (((res == "") ? "" : " ") +
            convert_number(kn) + " LAKH");
    }
    if (Hn > 0) {
        res += (((res == "") ? "" : " ") +
            convert_number(Hn) + " THOUSAND");
    }

    if (Dn) {
        res += (((res == "") ? "" : " ") +
            convert_number(Dn) + " HUNDRED");
    }


    let ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN");
    let tens = Array("", "", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY");

    if (tn > 0 || one > 0) {
        if (!(res == "")) {
            res += " AND ";
        }
        if (tn < 2) {
            res += ones[tn * 10 + one];
        }
        else {

            res += tens[tn];
            if (one > 0) {
                res += ("-" + ones[one]);
            }
        }
    }

    if (res == "") {
        res = "zero";
    }
    return res;
}