
const useGetAge = (birthYear, birthMonth, birthDate) => {
    const dob = new Date(birthYear, birthMonth, birthDate);
    const diffFromNow = Date.now() - dob;
    const year = new Date(diffFromNow).getUTCFullYear();
    const age = Math.abs(year - 1970);

    return { age };
}

export default useGetAge;