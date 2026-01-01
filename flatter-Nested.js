// Solution : Recursive

function flattenObject(obj, parentKey = '', result = {}) {
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        const newKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];

        if (value !== null && typeof value === 'object') {
            flattenObject(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }
    return result;
}

const obj = {
  name: 'John',
  address: {
    city: 'NYC',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  hobbies: ['reading', 'gaming']
};

console.log(flattenObject(obj));
