export const VersionGate = {
  checkBaseVersion: (minBaseVersion: string, currentBaseVersion: string): boolean => {
    // Simple string comparison for MVP. "1.2.0" <= "1.0.0" (Example)
    // In production, use semver logic.
    // Return TRUE if current >= minBaseVersion (Compatible)
    // Return FALSE if current < minBaseVersion (Need Upgrade)
    
    // Quick lexicographical check for simple versions like "1.2.0"
    // Limitations: "1.10" < "1.2" in string compare, so we need splitting.
    
    const parse = (v: string) => v.split('.').map(Number);
    const [minMajor, minMinor, minPatch] = parse(minBaseVersion);
    const [curMajor, curMinor, curPatch] = parse(currentBaseVersion);

    if (curMajor > minMajor) return true;
    if (curMajor < minMajor) return false;

    if (curMinor > minMinor) return true;
    if (curMinor < minMinor) return false;

    if (curPatch >= minPatch) return true;
    return false;
  }
};
