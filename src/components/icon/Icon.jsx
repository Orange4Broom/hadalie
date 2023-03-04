import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas);
library.add(fab);

const Icon = ({ name, type }) =>
  (
    <div className="icon">
      <FontAwesomeIcon icon={[type, name]} />
    </div>
  );

export default Icon;