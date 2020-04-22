import React from "react";
import {
  MenuItem,
  Select,
  InputLabel,
  makeStyles,
  FormControl
} from "@material-ui/core";

type Props = {
  inputData: any;
  onChangeData: (field: string, e: any) => void;
};

const useStyles = makeStyles(() => ({
  countryCodeLayout__formControl: {
    minWidth: 150,
    maxWidth: 150,
    marginBottom: "5px"
  },
  countryCodeLayout__inputLabel: {
    top: "-15px!important"
  },
  countryCodeLayout__selectInput: {
    marginTop: "0!important"
  }
}));

function CountryCodeSelect(props: Props) {
  const styles = useStyles();
  const { inputData, onChangeData } = props;

  return (
    <FormControl className={styles.countryCodeLayout__formControl}>
      <InputLabel
        className={styles.countryCodeLayout__inputLabel}
        id="country-code-select-label"
      >
        Country Code
      </InputLabel>
      <Select
        className={styles.countryCodeLayout__selectInput}
        labelId="country-code-select-label"
        id="country-code-select"
        placeholder="Country Code"
        value={inputData.countryCode}
        onChange={(e: any) => onChangeData("countryCode", e)}
      >
        <MenuItem value={1} selected>
          USA (+1)
        </MenuItem>
        <MenuItem value={44}>UK (+44)</MenuItem>

        <MenuItem disabled>Other Countries</MenuItem>
        <MenuItem value={213}>Algeria (+213)</MenuItem>
        <MenuItem data-countrycode="AD" value={376}>
          Andorra (+376)
        </MenuItem>
        <MenuItem data-countrycode="AO" value={244}>
          Angola (+244)
        </MenuItem>
        <MenuItem data-countrycode="AI" value={1264}>
          Anguilla (+1264)
        </MenuItem>
        <MenuItem data-countrycode="AG" value={1268}>
          Antigua &amp; Barbuda (+1268)
        </MenuItem>
        <MenuItem data-countrycode="AR" value={54}>
          Argentina (+54)
        </MenuItem>
        <MenuItem data-countrycode="AM" value={374}>
          Armenia (+374)
        </MenuItem>
        <MenuItem data-countrycode="AW" value={297}>
          Aruba (+297)
        </MenuItem>
        <MenuItem data-countrycode="AU" value={61}>
          Australia (+61)
        </MenuItem>
        <MenuItem data-countrycode="AT" value={43}>
          Austria (+43)
        </MenuItem>
        <MenuItem data-countrycode="AZ" value={994}>
          Azerbaijan (+994)
        </MenuItem>
        <MenuItem data-countrycode="BS" value={1242}>
          Bahamas (+1242)
        </MenuItem>
        <MenuItem data-countrycode="BH" value={973}>
          Bahrain (+973)
        </MenuItem>
        <MenuItem data-countrycode="BD" value={880}>
          Bangladesh (+880)
        </MenuItem>
        <MenuItem data-countrycode="BB" value={1246}>
          Barbados (+1246)
        </MenuItem>
        <MenuItem data-countrycode="BY" value={375}>
          Belarus (+375)
        </MenuItem>
        <MenuItem data-countrycode="BE" value={32}>
          Belgium (+32)
        </MenuItem>
        <MenuItem data-countrycode="BZ" value={501}>
          Belize (+501)
        </MenuItem>
        <MenuItem data-countrycode="BJ" value={229}>
          Benin (+229)
        </MenuItem>
        <MenuItem data-countrycode="BM" value={1441}>
          Bermuda (+1441)
        </MenuItem>
        <MenuItem data-countrycode="BT" value={975}>
          Bhutan (+975)
        </MenuItem>
        <MenuItem data-countrycode="BO" value={591}>
          Bolivia (+591)
        </MenuItem>
        <MenuItem data-countrycode="BA" value={387}>
          Bosnia Herzegovina (+387)
        </MenuItem>
        <MenuItem data-countrycode="BW" value={267}>
          Botswana (+267)
        </MenuItem>
        <MenuItem data-countrycode="BR" value={55}>
          Brazil (+55)
        </MenuItem>
        <MenuItem data-countrycode="BN" value={673}>
          Brunei (+673)
        </MenuItem>
        <MenuItem data-countrycode="BG" value={359}>
          Bulgaria (+359)
        </MenuItem>
        <MenuItem data-countrycode="BF" value={226}>
          Burkina Faso (+226)
        </MenuItem>
        <MenuItem data-countrycode="BI" value={257}>
          Burundi (+257)
        </MenuItem>
        <MenuItem data-countrycode="KH" value={855}>
          Cambodia (+855)
        </MenuItem>
        <MenuItem data-countrycode="CM" value={237}>
          Cameroon (+237)
        </MenuItem>
        <MenuItem data-countrycode="CA" value={1}>
          Canada (+1)
        </MenuItem>
        <MenuItem data-countrycode="CV" value={238}>
          Cape Verde Islands (+238)
        </MenuItem>
        <MenuItem data-countrycode="KY" value={1345}>
          Cayman Islands (+1345)
        </MenuItem>
        <MenuItem data-countrycode="CF" value={236}>
          Central African Republic (+236)
        </MenuItem>
        <MenuItem data-countrycode="CL" value={56}>
          Chile (+56)
        </MenuItem>
        <MenuItem data-countrycode="CN" value={86}>
          China (+86)
        </MenuItem>
        <MenuItem data-countrycode="CO" value={57}>
          Colombia (+57)
        </MenuItem>
        <MenuItem data-countrycode="KM" value={269}>
          Comoros (+269)
        </MenuItem>
        <MenuItem data-countrycode="CG" value={242}>
          Congo (+242)
        </MenuItem>
        <MenuItem data-countrycode="CK" value={682}>
          Cook Islands (+682)
        </MenuItem>
        <MenuItem data-countrycode="CR" value={506}>
          Costa Rica (+506)
        </MenuItem>
        <MenuItem data-countrycode="HR" value={385}>
          Croatia (+385)
        </MenuItem>
        <MenuItem data-countrycode="CY" value={90}>
          Cyprus - North (+90)
        </MenuItem>
        <MenuItem data-countrycode="CY" value={357}>
          Cyprus - South (+357)
        </MenuItem>
        <MenuItem data-countrycode="CZ" value={420}>
          Czech Republic (+420)
        </MenuItem>
        <MenuItem data-countrycode="DK" value={45}>
          Denmark (+45)
        </MenuItem>
        <MenuItem data-countrycode="DJ" value={253}>
          Djibouti (+253)
        </MenuItem>
        <MenuItem data-countrycode="DM" value={1809}>
          Dominica (+1809)
        </MenuItem>
        <MenuItem data-countrycode="DO" value={1809}>
          Dominican Republic (+1809)
        </MenuItem>
        <MenuItem data-countrycode="EC" value={593}>
          Ecuador (+593)
        </MenuItem>
        <MenuItem data-countrycode="EG" value={20}>
          Egypt (+20)
        </MenuItem>
        <MenuItem data-countrycode="SV" value={503}>
          El Salvador (+503)
        </MenuItem>
        <MenuItem data-countrycode="GQ" value={240}>
          Equatorial Guinea (+240)
        </MenuItem>
        <MenuItem data-countrycode="ER" value={291}>
          Eritrea (+291)
        </MenuItem>
        <MenuItem data-countrycode="EE" value={372}>
          Estonia (+372)
        </MenuItem>
        <MenuItem data-countrycode="ET" value={251}>
          Ethiopia (+251)
        </MenuItem>
        <MenuItem data-countrycode="FK" value={500}>
          Falkland Islands (+500)
        </MenuItem>
        <MenuItem data-countrycode="FO" value={298}>
          Faroe Islands (+298)
        </MenuItem>
        <MenuItem data-countrycode="FJ" value={679}>
          Fiji (+679)
        </MenuItem>
        <MenuItem data-countrycode="FI" value={358}>
          Finland (+358)
        </MenuItem>
        <MenuItem data-countrycode="FR" value={33}>
          France (+33)
        </MenuItem>
        <MenuItem data-countrycode="GF" value={594}>
          French Guiana (+594)
        </MenuItem>
        <MenuItem data-countrycode="PF" value={689}>
          French Polynesia (+689)
        </MenuItem>
        <MenuItem data-countrycode="GA" value={241}>
          Gabon (+241)
        </MenuItem>
        <MenuItem data-countrycode="GM" value={220}>
          Gambia (+220)
        </MenuItem>
        <MenuItem data-countrycode="GE" value={7880}>
          Georgia (+7880)
        </MenuItem>
        <MenuItem data-countrycode="DE" value={49}>
          Germany (+49)
        </MenuItem>
        <MenuItem data-countrycode="GH" value={233}>
          Ghana (+233)
        </MenuItem>
        <MenuItem data-countrycode="GI" value={350}>
          Gibraltar (+350)
        </MenuItem>
        <MenuItem data-countrycode="GR" value={30}>
          Greece (+30)
        </MenuItem>
        <MenuItem data-countrycode="GL" value={299}>
          Greenland (+299)
        </MenuItem>
        <MenuItem data-countrycode="GD" value={1473}>
          Grenada (+1473)
        </MenuItem>
        <MenuItem data-countrycode="GP" value={590}>
          Guadeloupe (+590)
        </MenuItem>
        <MenuItem data-countrycode="GU" value={671}>
          Guam (+671)
        </MenuItem>
        <MenuItem data-countrycode="GT" value={502}>
          Guatemala (+502)
        </MenuItem>
        <MenuItem data-countrycode="GN" value={224}>
          Guinea (+224)
        </MenuItem>
        <MenuItem data-countrycode="GW" value={245}>
          Guinea - Bissau (+245)
        </MenuItem>
        <MenuItem data-countrycode="GY" value={592}>
          Guyana (+592)
        </MenuItem>
        <MenuItem data-countrycode="HT" value={509}>
          Haiti (+509)
        </MenuItem>
        <MenuItem data-countrycode="HN" value={504}>
          Honduras (+504)
        </MenuItem>
        <MenuItem data-countrycode="HK" value={852}>
          Hong Kong (+852)
        </MenuItem>
        <MenuItem data-countrycode="HU" value={36}>
          Hungary (+36)
        </MenuItem>
        <MenuItem data-countrycode="IS" value={354}>
          Iceland (+354)
        </MenuItem>
        <MenuItem data-countrycode="IN" value={91}>
          India (+91)
        </MenuItem>
        <MenuItem data-countrycode="ID" value={62}>
          Indonesia (+62)
        </MenuItem>
        <MenuItem data-countrycode="IQ" value={964}>
          Iraq (+964)
        </MenuItem>
        <MenuItem data-countrycode="IE" value={353}>
          Ireland (+353)
        </MenuItem>
        <MenuItem data-countrycode="IL" value={972}>
          Israel (+972)
        </MenuItem>
        <MenuItem data-countrycode="IT" value={39}>
          Italy (+39)
        </MenuItem>
        <MenuItem data-countrycode="JM" value={1876}>
          Jamaica (+1876)
        </MenuItem>
        <MenuItem data-countrycode="JP" value={81}>
          Japan (+81)
        </MenuItem>
        <MenuItem data-countrycode="JO" value={962}>
          Jordan (+962)
        </MenuItem>
        <MenuItem data-countrycode="KZ" value={7}>
          Kazakhstan (+7)
        </MenuItem>
        <MenuItem data-countrycode="KE" value={254}>
          Kenya (+254)
        </MenuItem>
        <MenuItem data-countrycode="KI" value={686}>
          Kiribati (+686)
        </MenuItem>
        <MenuItem data-countrycode="KR" value={82}>
          Korea - South (+82)
        </MenuItem>
        <MenuItem data-countrycode="KW" value={965}>
          Kuwait (+965)
        </MenuItem>
        <MenuItem data-countrycode="KG" value={996}>
          Kyrgyzstan (+996)
        </MenuItem>
        <MenuItem data-countrycode="LA" value={856}>
          Laos (+856)
        </MenuItem>
        <MenuItem data-countrycode="LV" value={371}>
          Latvia (+371)
        </MenuItem>
        <MenuItem data-countrycode="LB" value={961}>
          Lebanon (+961)
        </MenuItem>
        <MenuItem data-countrycode="LS" value={266}>
          Lesotho (+266)
        </MenuItem>
        <MenuItem data-countrycode="LR" value={231}>
          Liberia (+231)
        </MenuItem>
        <MenuItem data-countrycode="LY" value={218}>
          Libya (+218)
        </MenuItem>
        <MenuItem data-countrycode="LI" value={417}>
          Liechtenstein (+417)
        </MenuItem>
        <MenuItem data-countrycode="LT" value={370}>
          Lithuania (+370)
        </MenuItem>
        <MenuItem data-countrycode="LU" value={352}>
          Luxembourg (+352)
        </MenuItem>
        <MenuItem data-countrycode="MO" value={853}>
          Macao (+853)
        </MenuItem>
        <MenuItem data-countrycode="MK" value={389}>
          Macedonia (+389)
        </MenuItem>
        <MenuItem data-countrycode="MG" value={261}>
          Madagascar (+261)
        </MenuItem>
        <MenuItem data-countrycode="MW" value={265}>
          Malawi (+265)
        </MenuItem>
        <MenuItem data-countrycode="MY" value={60}>
          Malaysia (+60)
        </MenuItem>
        <MenuItem data-countrycode="MV" value={960}>
          Maldives (+960)
        </MenuItem>
        <MenuItem data-countrycode="ML" value={223}>
          Mali (+223)
        </MenuItem>
        <MenuItem data-countrycode="MT" value={356}>
          Malta (+356)
        </MenuItem>
        <MenuItem data-countrycode="MH" value={692}>
          Marshall Islands (+692)
        </MenuItem>
        <MenuItem data-countrycode="MQ" value={596}>
          Martinique (+596)
        </MenuItem>
        <MenuItem data-countrycode="MR" value={222}>
          Mauritania (+222)
        </MenuItem>
        <MenuItem data-countrycode="YT" value={269}>
          Mayotte (+269)
        </MenuItem>
        <MenuItem data-countrycode="MX" value={52}>
          Mexico (+52)
        </MenuItem>
        <MenuItem data-countrycode="FM" value={691}>
          Micronesia (+691)
        </MenuItem>
        <MenuItem data-countrycode="MD" value={373}>
          Moldova (+373)
        </MenuItem>
        <MenuItem data-countrycode="MC" value={377}>
          Monaco (+377)
        </MenuItem>
        <MenuItem data-countrycode="MN" value={976}>
          Mongolia (+976)
        </MenuItem>
        <MenuItem data-countrycode="MS" value={1664}>
          Montserrat (+1664)
        </MenuItem>
        <MenuItem data-countrycode="MA" value={212}>
          Morocco (+212)
        </MenuItem>
        <MenuItem data-countrycode="MZ" value={258}>
          Mozambique (+258)
        </MenuItem>
        <MenuItem data-countrycode="MN" value={95}>
          Myanmar (+95)
        </MenuItem>
        <MenuItem data-countrycode="NA" value={264}>
          Namibia (+264)
        </MenuItem>
        <MenuItem data-countrycode="NR" value={674}>
          Nauru (+674)
        </MenuItem>
        <MenuItem data-countrycode="NP" value={977}>
          Nepal (+977)
        </MenuItem>
        <MenuItem data-countrycode="NL" value={31}>
          Netherlands (+31)
        </MenuItem>
        <MenuItem data-countrycode="NC" value={687}>
          New Caledonia (+687)
        </MenuItem>
        <MenuItem data-countrycode="NZ" value={64}>
          New Zealand (+64)
        </MenuItem>
        <MenuItem data-countrycode="NI" value={505}>
          Nicaragua (+505)
        </MenuItem>
        <MenuItem data-countrycode="NE" value={227}>
          Niger (+227)
        </MenuItem>
        <MenuItem data-countrycode="NG" value={234}>
          Nigeria (+234)
        </MenuItem>
        <MenuItem data-countrycode="NU" value={683}>
          Niue (+683)
        </MenuItem>
        <MenuItem data-countrycode="NF" value={672}>
          Norfolk Islands (+672)
        </MenuItem>
        <MenuItem data-countrycode="NP" value={670}>
          Northern Marianas (+670)
        </MenuItem>
        <MenuItem data-countrycode="NO" value={47}>
          Norway (+47)
        </MenuItem>
        <MenuItem data-countrycode="OM" value={968}>
          Oman (+968)
        </MenuItem>
        <MenuItem data-countrycode="PK" value={92}>
          Pakistan (+92)
        </MenuItem>
        <MenuItem data-countrycode="PW" value={680}>
          Palau (+680)
        </MenuItem>
        <MenuItem data-countrycode="PA" value={507}>
          Panama (+507)
        </MenuItem>
        <MenuItem data-countrycode="PG" value={675}>
          Papua New Guinea (+675)
        </MenuItem>
        <MenuItem data-countrycode="PY" value={595}>
          Paraguay (+595)
        </MenuItem>
        <MenuItem data-countrycode="PE" value={51}>
          Peru (+51)
        </MenuItem>
        <MenuItem data-countrycode="PH" value={63}>
          Philippines (+63)
        </MenuItem>
        <MenuItem data-countrycode="PL" value={48}>
          Poland (+48)
        </MenuItem>
        <MenuItem data-countrycode="PT" value={351}>
          Portugal (+351)
        </MenuItem>
        <MenuItem data-countrycode="PR" value={1787}>
          Puerto Rico (+1787)
        </MenuItem>
        <MenuItem data-countrycode="QA" value={974}>
          Qatar (+974)
        </MenuItem>
        <MenuItem data-countrycode="RE" value={262}>
          Reunion (+262)
        </MenuItem>
        <MenuItem data-countrycode="RO" value={40}>
          Romania (+40)
        </MenuItem>
        <MenuItem data-countrycode="RU" value={7}>
          Russia (+7)
        </MenuItem>
        <MenuItem data-countrycode="RW" value={250}>
          Rwanda (+250)
        </MenuItem>
        <MenuItem data-countrycode="SM" value={378}>
          San Marino (+378)
        </MenuItem>
        <MenuItem data-countrycode="ST" value={239}>
          Sao Tome &amp; Principe (+239)
        </MenuItem>
        <MenuItem data-countrycode="SA" value={966}>
          Saudi Arabia (+966)
        </MenuItem>
        <MenuItem data-countrycode="SN" value={221}>
          Senegal (+221)
        </MenuItem>
        <MenuItem data-countrycode="CS" value={381}>
          Serbia (+381)
        </MenuItem>
        <MenuItem data-countrycode="SC" value={248}>
          Seychelles (+248)
        </MenuItem>
        <MenuItem data-countrycode="SL" value={232}>
          Sierra Leone (+232)
        </MenuItem>
        <MenuItem data-countrycode="SG" value={65}>
          Singapore (+65)
        </MenuItem>
        <MenuItem data-countrycode="SK" value={421}>
          Slovak Republic (+421)
        </MenuItem>
        <MenuItem data-countrycode="SI" value={386}>
          Slovenia (+386)
        </MenuItem>
        <MenuItem data-countrycode="SB" value={677}>
          Solomon Islands (+677)
        </MenuItem>
        <MenuItem data-countrycode="SO" value={252}>
          Somalia (+252)
        </MenuItem>
        <MenuItem data-countrycode="ZA" value={27}>
          South Africa (+27)
        </MenuItem>
        <MenuItem data-countrycode="ES" value={34}>
          Spain (+34)
        </MenuItem>
        <MenuItem data-countrycode="LK" value={94}>
          Sri Lanka (+94)
        </MenuItem>
        <MenuItem data-countrycode="SH" value={290}>
          St. Helena (+290)
        </MenuItem>
        <MenuItem data-countrycode="KN" value={1869}>
          St. Kitts (+1869)
        </MenuItem>
        <MenuItem data-countrycode="SC" value={1758}>
          St. Lucia (+1758)
        </MenuItem>
        <MenuItem data-countrycode="SR" value={597}>
          Suriname (+597)
        </MenuItem>
        <MenuItem data-countrycode="SD" value={249}>
          Sudan (+249)
        </MenuItem>
        <MenuItem data-countrycode="SZ" value={268}>
          Swaziland (+268)
        </MenuItem>
        <MenuItem data-countrycode="SE" value={46}>
          Sweden (+46)
        </MenuItem>
        <MenuItem data-countrycode="CH" value={41}>
          Switzerland (+41)
        </MenuItem>
        <MenuItem data-countrycode="TW" value={886}>
          Taiwan (+886)
        </MenuItem>
        <MenuItem data-countrycode="TJ" value={992}>
          Tajikistan (+992)
        </MenuItem>
        <MenuItem data-countrycode="TH" value={66}>
          Thailand (+66)
        </MenuItem>
        <MenuItem data-countrycode="TG" value={228}>
          Togo (+228)
        </MenuItem>
        <MenuItem data-countrycode="TO" value={676}>
          Tonga (+676)
        </MenuItem>
        <MenuItem data-countrycode="TT" value={1868}>
          Trinidad &amp; Tobago (+1868)
        </MenuItem>
        <MenuItem data-countrycode="TN" value={216}>
          Tunisia (+216)
        </MenuItem>
        <MenuItem data-countrycode="TR" value={90}>
          Turkey (+90)
        </MenuItem>
        <MenuItem data-countrycode="TM" value={993}>
          Turkmenistan (+993)
        </MenuItem>
        <MenuItem data-countrycode="TC" value={1649}>
          Turks &amp; Caicos Islands (+1649)
        </MenuItem>
        <MenuItem data-countrycode="TV" value={688}>
          Tuvalu (+688)
        </MenuItem>
        <MenuItem data-countrycode="UG" value={256}>
          Uganda (+256)
        </MenuItem>
        <MenuItem data-countrycode="UA" value={380}>
          Ukraine (+380)
        </MenuItem>
        <MenuItem data-countrycode="AE" value={971}>
          United Arab Emirates (+971)
        </MenuItem>
        <MenuItem data-countrycode="UY" value={598}>
          Uruguay (+598)
        </MenuItem>
        <MenuItem data-countrycode="UZ" value={998}>
          Uzbekistan (+998)
        </MenuItem>
        <MenuItem data-countrycode="VU" value={678}>
          Vanuatu (+678)
        </MenuItem>
        <MenuItem data-countrycode="VA" value={379}>
          Vatican City (+379)
        </MenuItem>
        <MenuItem data-countrycode="VE" value={58}>
          Venezuela (+58)
        </MenuItem>
        <MenuItem data-countrycode="VN" value={84}>
          Vietnam (+84)
        </MenuItem>
        <MenuItem data-countrycode="VG" value={1}>
          Virgin Islands - British (+1)
        </MenuItem>
        <MenuItem data-countrycode="VI" value={1}>
          Virgin Islands - US (+1)
        </MenuItem>
        <MenuItem data-countrycode="WF" value={681}>
          Wallis &amp; Futuna (+681)
        </MenuItem>
        <MenuItem data-countrycode="YE" value={969}>
          Yemen (North)(+969)
        </MenuItem>
        <MenuItem data-countrycode="YE" value={967}>
          Yemen (South)(+967)
        </MenuItem>
        <MenuItem data-countrycode="ZM" value={260}>
          Zambia (+260)
        </MenuItem>
        <MenuItem data-countrycode="ZW" value={263}>
          Zimbabwe (+263)
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default CountryCodeSelect;
