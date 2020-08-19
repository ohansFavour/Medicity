import React, { useState} from 'react';
import { RouteComponentProps,withRouter } from 'react-router-dom';

// styles
import './Compare.scss';

// component
import Upload from '../../components/Upload/Upload';
import Spinner from '../../components/Spinner/Spinner';


const Compare = ({ history }: RouteComponentProps) => {
  // state
  const [firstFile, setFirstFile] = useState();
  const [secondFile, setSecondFile] = useState();
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  
  const empty = !(firstFile && secondFile && firstName && secondName);
   const isComparing = false;

  const handleCompare = (event: React.FormEvent) => {
 
  };

  return (
    <div className="compare">
      {isComparing ? (
        <Spinner />
      ) : (
        <>
          <div className="compare__cards">
            <Upload
              background={true}
              setFile={setFirstFile}
              setName={setFirstName}
            />
            <Upload
              background={false}
              setFile={setSecondFile}
              setName={setSecondName}
            />
          </div>
          <div>
            <button
              className={`${empty ? 'disabled' : ''}`}
              onClick={handleCompare}
              disabled={empty}
            >
              Compare
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(Compare);
