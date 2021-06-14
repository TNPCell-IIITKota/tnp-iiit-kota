import Adobe from '@assets/adobe.svg';
import AlcatelLucent from '@assets/alcatellucent.svg';
import Amazon from '@assets/amazon.svg';
import Capgemini from '@assets/capgemini.svg';
import CGI from '@assets/cgi.svg';
import Deloitte from '@assets/deloitte.svg';
import Ericsson from '@assets/ericsson.svg';
import Fanatics from '@assets/fanatics.svg';
import Flipkart from '@assets/flipkart.svg';
import GoldmanSachs from '@assets/goldmansachs.svg';
import Infosys from '@assets/infosys.svg';
import JIO from '@assets/jio.svg';
import Microsoft from '@assets/microsoft.svg';
import Oracle from '@assets/oracle.svg';
import PublicisSapient from '@assets/publicissapient.svg';
import Samsung from '@assets/samsung.svg';
import ServiceNow from '@assets/servicenow.svg';
import TCS from '@assets/tcs.svg';
import Toshiba from '@assets/toshiba.svg';
import Yamaha from '@assets/yamaha.svg';

const companies: Record<0 | 1, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>> = {
  0: { Microsoft, Amazon, GoldmanSachs, Flipkart, Adobe, Samsung, ServiceNow },
  1: {
    Capgemini,
    PublicisSapient,
    Yamaha,
    Deloitte,
    Infosys,
    AlcatelLucent,
    Toshiba,
    Ericsson,
    TCS,
    Fanatics,
    JIO,
    Oracle,
    CGI,
  },
};

export default companies;
