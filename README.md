# PickYourBerry

To run Backend server:
1.npm install
2.setup environmental variables
3.npm run migrate up
4.npm run dev



sources for data:

  - name: DoPT
    organization: Department of Personnel & Training
    domain: dopt.gov.in
    categories:
      - leave
      - conduct
      - cca
      - recruitment
      - promotion
      - seniority

  - name: ISTM
    organization: Institute of Secretariat Training & Management
    domain: istm.gov.in
    categories:
      - leave
      - conduct
      - discipline
      - office_procedure
      - pension

  - name: Department of Expenditure
    organization: Department of Expenditure
    domain: doe.gov.in
    categories:
      - pay
      - allowances
      - travel