import Ep1 from './ep1';
import Ep2 from './ep2';
import Ep3 from './ep3';

const Episodes = [
  {comp: Ep1},
  {comp: Ep2},
  {comp: Ep3}
];

Episodes.forEach((ep, i) => {
  ep.path = `/ep${i+1}`;
});

export default Episodes;
