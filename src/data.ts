// src/data.ts
// Simulated external source (like an API returning JSON)

let threatsdata = `[
  {
    "id": "THR-1001",
    "logs": "2025-10-11T14:30:12.511Z",
    "threatName": "bhas.py",
    "severity": "CRITICAL",
    "affectedSystems": ["Workstation-45"],
    "status": "Infected"
  },

  {
    "id": "THR-1002",
    "logs": "2025-10-10T11:10:55.511Z",
    "threatName": "PhishLink-22",
    "severity": "MEDIUM",
    "affectedSystems": "Email Gateway",
    "status": "Resolved",
    "dateResolved": "2025-10-10T18:44:10.511Z"
  },

  {
    "id": "THR-1003",
    "logs": "2025-10-09T09:20:40.511Z",
    "threatName": "Worm.Ares",
    "severity": "HIGH",
    "affectedSystems": ["Server-12", "Server-14"],
    "status": "Infected"
  },

  {
    "id": "THR-1004",
    "logs": "2025-10-08T16:05:27.511Z",
    "threatName": "Adware.Scout",
    "severity": "LOW",
    "affectedSystems": "Kiosk-03",
    "status": "Resolved",
    "dateResolved": "2025-10-08T19:15:33.511Z"
  },

  {
    "id": "THR-1005",
    "logs": "2025-10-11T13:02:25.511Z",
    "threatName": "Ransom.Nyx",
    "severity": "CRITICAL",
    "affectedSystems": ["Finance-DB01"],
    "status": "Open"
  },

  {
    "id": "THR-1006",
    "threatName": "Backdoor.Mercury",
    "severity": "HIGH",
    "affectedSystems": "Workstation-22",
    "logs": "2025-10-07T14:12:19.511Z",
    "status": "Infected"
  },

  {
    "id": "THR-1007",
    "threatName": "Exploit.CVE-2025-1234",
    "severity": "HIGH",
    "affectedSystems": ["Web-Proxy-01"],
    "logs": "2025-10-07T10:44:11.511Z",
    "status": "Resolved",
    "dateResolved": "2025-10-07T16:03:49.511Z"
  },

  {
    "id": "THR-1008",
    "threatName": "Spyware.Heron",
    "severity": "MEDIUM",
    "affectedSystems": "HR-Laptop-07",
    "logs": "2025-10-11T12:05:47.511Z",
    "status": "Infected"
  },
  {
    "id": "THR-1009",
    "logs": "2025-10-06T18:25:31.511Z",
    "threatName": "PhishCred-Portal",
    "severity": "LOW",
    "affectedSystems": ["Email Gateway", "SSO-Portal"],
    "status": "Resolved",
    "dateResolved": "2025-10-06T20:10:00.511Z"
  },
  {
    "id": "THR-1010",
    "logs": "2025-10-11T15:33:03.511Z",
    "threatName": "Rootkit.Obsidian",
    "severity": "CRITICAL",
    "affectedSystems": "Server-08",
    "status": "Infected"
  },

  {
    "id": "THR-1011",
    "logs": "2025-10-05T07:55:12.511Z",
    "threatName": "MalDoc.VBAStorm",
    "severity": "MEDIUM",
    "affectedSystems": "Accounting-WS-03",
    "status": "Resolved",
    "dateResolved": "2025-10-05T12:21:40.511Z"
  },

  {
    "id": "THR-1012",
    "logs": "2025-10-11T11:29:58.511Z",
    "threatName": "BruteSSH.Atlus",
    "severity": "HIGH",
    "affectedSystems": ["Server-SSH-GW"],
    "status": "Infected"
  },

  {
    "id": "THR-1013",
    "logs": "2025-10-03T21:10:44.511Z",
    "threatName": "AdInjector.Pixel",
    "severity": "LOW",
    "affectedSystems": "Marketing-Mac-02",
    "status": "Resolved",
    "dateResolved": "2025-10-04T01:02:22.511Z"
  },

  {
    "id": "THR-1014",
    "logs": "2025-10-11T08:40:18.511Z",
    "threatName": "Beacon.Hydra",
    "severity": "HIGH",
    "affectedSystems": ["Server-12", "DMZ-Node-03"],
    "status": "Infected"
  },

  {
    "id": "THR-1015",
    "logs": "2025-10-02T16:03:59.511Z",
    "threatName": "Keylogger.Sable",
    "severity": "MEDIUM",
    "affectedSystems": "Exec-Laptop-01",
    "status": "Resolved",
    "dateResolved": "2025-10-02T19:45:10.511Z"
  },

  {
    "id": "THR-1016",
    "threatName": "DNSHijack.Orion",
    "severity": "CRITICAL",
    "affectedSystems": ["DNS-Resolver-01", "Branch-Router-02"],
    "logs": "2025-10-11T06:12:27.511Z",
    "status": "Infected"
  },
  {
    "id": "THR-1017",
    "logs": "2025-10-01T22:17:05.511Z",
    "threatName": "SQLi.Nova",
    "severity": "HIGH",
    "affectedSystems": "Customer-Portal-DB",
    "status": "Resolved",
    "dateResolved": "2025-10-02T02:50:31.511Z"
  },

  {
    "id": "THR-1018",
    "logs": "2025-10-11T05:41:00.511Z",
    "threatName": "XSS.Reflector",
    "severity": "MEDIUM",
    "affectedSystems": ["Marketing-Landing-01"],
    "status": "Infected"
  },

  {
    "id": "THR-1019",
    "logs": "2025-09-30T13:33:18.511Z",
    "threatName": "SupplyChain.Mica",
    "severity": "CRITICAL",
    "affectedSystems": ["Build-Server-02"],
    "status": "Infected"
  },

  {
    "id": "THR-1020",
    "logs": "2025-10-04T09:48:42.511Z",
    "threatName": "CSRF.Tick",
    "severity": "LOW",
    "affectedSystems": "Intranet-Portal",
    "status": "Resolved",
    "dateResolved": "2025-10-04T12:05:12.511Z"
  }
]`;

export default threatsdata;
