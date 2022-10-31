import JobList from './JobList';
import { useParams } from 'react-router';
import { getCompany } from '../graphql/queries';
import { useState,useEffect } from 'react';

function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const [err, setError] = useState(false);
  const { companyId } = useParams();
  useEffect(() => {getCompany(companyId).then(setCompany).catch((err) => setError(true))}, [companyId]);
  if(err)
  {
    return <p>Sorry, something went wrong!</p>;
  }
  if(!company)
  {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
      <h5 className='title is-5'>
        Jobs at {company.name}
      </h5>
      <JobList jobs={company.jobs}/>
    </div>
  );
}

export default CompanyDetail;