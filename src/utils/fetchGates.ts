import { API } from '../constants';

/**
 * Represents the values for each key in the Gates object.
 */
type Values = {
  [value: string]: boolean;
};

/**
 * Represents the available tables for Gates, which can be 'knobs' or 'experiments'.
 */
type Tables = 'knobs' | 'experiments';

/**
 * Represents the Gates object with keys as Tables and values as Values.
 */
type Gates = {
  [key in Tables]: Values;
};

export async function fetchGates(clientKey: string): Promise<Gates> {
  const response = await fetch(`${API}/gates?keys=knobs`, {
    headers: {
      Authorization: `Bearer ${clientKey}`,
      'Content-Type': 'application/json',
    },
  });

  return (await response.json()) as Gates;
}
