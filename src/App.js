import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { fetchIntegrations } from './services/fetchIntegrations';
import { SingleIntegration } from './components/SingleIntegration';
import { useMergeLink } from "@mergeapi/react-merge-link";
import { fetchAccountToken } from './services/fetchAccountToken';
import { category } from './constants';

const App = () => {
  const [integrations, setIntegrations] = useState([])
  const [linkToken, setLinkToken] = useState('')

  useEffect(() => {
    fetchIntegrations(category)
      .then(integrations => {
        setIntegrations(integrations)
      })
  }, [])

  useEffect(() => {
    if (linkToken) { open() }
  }, [linkToken])

  const onSuccess = useCallback(async (publicToken) => {
    const response = await fetchAccountToken(publicToken, category)
    console.log(response.account_token)
  }, [])

  const { open, isReady } = useMergeLink({
    linkToken,
    onSuccess
  });

  return (
    <div className="app">
      <div className="app-content">
        {integrations.length > 0 && 
          integrations.map(details => (
            <SingleIntegration
              details={details}
              category={category}
              key={details.slug}
              updateLinkToken={setLinkToken}
              ready={isReady}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
