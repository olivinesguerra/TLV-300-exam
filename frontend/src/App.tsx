import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';

function App() {
  const options = [
    { value: 'domain_information', label: 'Domain Information' },
    { value: 'contact_information', label: 'Contact Information' },
  ];
  const [option, setOption] = useState<Option>(options[0]); 
  const [data, setData] = useState<any | null>(null); 
  const [domain, setDomain] = useState<string>(""); 
  const [err, setErr] = useState<any>(null); 

  const onSelectOption = (arg: Option)=> {
    console.log(arg);
    setData(null);
    setOption(arg);
  };

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (domain !== '') {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/domain?domain=${domain}&type=json&requested_data=${option?.value}`);
        const { data } = res;
        console.log(data?.data);
        setData(data?.data);
      }catch(err) {
        setErr(err);
      }
    } else {

    }

  };

  const onDomainChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDomain(e?.currentTarget?.value);
  };

  return (
    <div className="flex h-screen flex-col justify-center p-[20px]">
      <div className='flex w-full border-black border-2 p-[10px] mb-[10px]'>
        <input className='flex w-full bg-white focus:outline-none' onChange={onDomainChange} />
      </div>
      <Dropdown 
        options={options}  
        value={option} 
        onChange={onSelectOption}
        placeholder="Select an option" 
      />
      <button onClick={onSubmit}>Submit</button>

      {err ? <div className='text-red-600'>{ err?.message }</div> : null}

      {
        data ? 
          <div className='flex flex-col p-[20px]'>
            {
              option?.value === "domain_information" ? 
                <div className='flex-col'>
                  <div className=''>{data?.domain_age}</div>
                  <div className=''>{data?.domain_name}</div>
                  <div className=''>{data?.expiration_date}</div>
                  <div className=''>{data?.registrar}</div>
                  <div className=''>{data?.registration_date}</div>
                  <div className=''>{data?.host_names.join(', ')}</div>
                </div> 
              : 
              <div className='flex-col'>
                <div className=''>{data?.administrative_contact_name}</div>
                <div className=''>{data?.contact_email}</div>
                <div className=''>{data?.registrant_name}</div>
                <div className=''>{data?.technical_contact_name}</div>
              </div> 
            }
          </div> 
        : null
      }
    </div>
  );
}

export default App;
