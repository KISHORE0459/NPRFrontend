export async function fetchuser() {
  try {
    const res = await fetch("http://localhost:5000/api/users");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchentrydata() {
  try {
    const res = await fetch("http://localhost:5000/api/entries");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchexitdata() {
  try {
    const res = await fetch("http://localhost:5000/api/exits");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchpath() {
  try {
    const res = await fetch("http://localhost:5000/api/path");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchuserbyname(name) {
  try {
    const res = await fetch(`http://localhost:5000/api/users/name/${name}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
