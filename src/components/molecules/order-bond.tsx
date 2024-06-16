import number2text from "@/lib/number.to.text";
import { translateEnglishToTelugu } from "@/lib/english.to.telugu";

export const OrderBond = async (props: {
  orderDate: string;
  billNo: number;
  customerName: string;
  items: string[];
}) => {
  const date = new Date();
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = date.getFullYear();
  const billNo = Math.floor(Math.random() * 10000);
  let teluguTranslation = number2text(5079);//await translateEnglishToTelugu(number2text(5079))
  let name = "Pydimarri Harish";//await translateEnglishToTelugu("Pydimarri Harish")
  return (
    <div>
      <div className="my-2 p-8 shadow-lg h-full w-full bg-lime-100 text-sm">
        <div className="flex justify-between">
          <span>నెం. {billNo}</span>
          <span>
            తేదీ :{" "}
            <span className="underline text-blue-700">
              {dd}-{mm}-{yyyy}
            </span>
          </span>
        </div>
        <br />
        <div>
          <span>రాజశ్రీ &nbsp; </span>
          <span className="text-blue-700 text-lg"> శ్రీ మారుతి ట్రేడర్స్ </span>
          <span> &nbsp; గారికి</span>
        </div>
        <b className="text-lg text-blue-700">
          &nbsp; &nbsp; {name} &nbsp; &nbsp;
        </b>
        దండములు. ఆ తరువాత ఈ దినం నేను నీ వద్ద అప్పుగా తీసుకున్న సరుకుల విలువ <br />
        రూ. <b className="text-lg text-blue-700">5079</b> ₹ లు.
        అక్షరాలా <span className="underline">{teluguTranslation}</span> <br />
        తీసుకుని బాకీ అయినాను. యిందుకు వొడ్డీ నెలకు 1కి నూటికి రూ ___
        పైసలు ప్రకారం జరుగు దినములకు అయిన వొడ్డిమొదలు నీకు గాని నీ ఉత్తర్వు
        పొందిన వారికి గాని అడిగిన తక్షణం ఇవ్వగలవాడను.
        <br /> <br />
        <div className="flex justify-end">
          <span>ఇంతే దండములు</span>
        </div>
        <div className="flex justify-center">
          <b>X</b>
        </div>
        <br />
      </div>
    </div>
  );
};
