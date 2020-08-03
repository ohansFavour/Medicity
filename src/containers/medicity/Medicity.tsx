import React from 'react'

// styles
import './Medicity.scss'

// components
import Video from '../../components/video/Video'

const Medicity = () => {
  return (
    <div className="medicity">
      <h3>Welcome to Medicity</h3>
      <div className="medicity__main">
        <div className="medicity__text">
          <h4>Your Quick Link to the Doctor </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra ante id augue
            iaculis varius. Praesent sed lorem vitae leo tincidunt rhoncus. Mauris vel ipsum est.
            Sed ornare nibh nec massa posuere semper. Aenean et suscipit magna, et placerat odio.
            Suspendisse ac bibendum nisl. In hac habitasse platea dictumst. Etiam finibus porta
            turpis, vel vestibulum felis feugiat vel. Aenean finibus, lectus vel mattis rutrum,
            augue magna ultrices leo, vel pretium est magna eget leo. Quisque a fringilla est.
          </p>
        </div>
        <div className="medicity__video">
          <Video />
        </div>
      </div>
    </div>
  )
}

export default Medicity
