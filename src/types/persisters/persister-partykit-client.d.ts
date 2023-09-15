/// persister-partykit-client

import PartySocket from 'partysocket';
import {Persister} from '../persisters';
import {Store} from '../store';

/// createPartyKitPersister
export function createPartyKitPersister(
  store: Store,
  connection: PartySocket,
  onIgnoredError?: (error: any) => void,
): Persister;
