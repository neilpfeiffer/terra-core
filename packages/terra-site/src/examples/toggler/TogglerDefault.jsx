import React from 'react';
import Toggler from 'terra-toggler/src/Toggler';

const content = <div> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada dui sed porttitor interdum. Sed scelerisque tempor massa, id mollis enim dapibus sit amet. Nunc interdum orci at venenatis condimentum. Donec scelerisque leo eget aliquam tempus. Nunc maximus rhoncus sem, pharetra gravida risus consectetur et. Ut nec mi eros. Cras convallis pellentesque neque ac tristique. Curabitur iaculis erat ac nulla accumsan mattis.</p> <p>In ornare fringilla mauris, non vestibulum orci sodales et. Morbi finibus efficitur vulputate. Cras viverra, felis sit amet porttitor tristique, turpis lacus sodales risus, id fermentum nisl lacus non mauris. Phasellus eu dolor justo. Quisque tempor est purus, et scelerisque justo vestibulum vel. Fusce ornare venenatis nibh, sed tristique ipsum luctus vel. Pellentesque in bibendum lorem. Integer mi metus, aliquam eget turpis quis, consectetur placerat diam. Etiam velit felis, viverra eu ultricies sed, feugiat id nisl. Aliquam vestibulum tincidunt felis vitae scelerisque. Nullam rutrum justo ac maximus sodales.</p> <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vel arcu suscipit, aliquet lectus scelerisque, tincidunt nunc. Aliquam ipsum nibh, egestas nec consectetur sit amet, suscipit eget dolor. Duis vitae turpis tempor, elementum mauris dapibus, elementum enim. Duis sodales enim volutpat leo ultrices, sed lacinia mauris sodales. Curabitur vitae viverra dolor. Pellentesque tempus, metus eget tristique malesuada, lectus tortor pulvinar nunc, at hendrerit sem odio placerat ex. Nullam efficitur urna eget sem aliquet hendrerit. Donec imperdiet ante erat, vitae condimentum arcu rhoncus sed.</p></div>;
const toggleHeader = <p>Click Me</p>;

const TogglerDefault = () => (
  <div>
    <Toggler
          header={toggleHeader}
          type="link"
    >
      {content}
    </Toggler>
  </div>
);

export default TogglerDefault;
