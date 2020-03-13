exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('states')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('states').insert([
        {
          abbreviation: 'AL'
        },
        {
          abbreviation: 'AK'
        },
        {
          abbreviation: 'AZ'
        },
        {
          abbreviation: 'AR'
        },
        {
          abbreviation: 'CA'
        },
        {
          abbreviation: 'CO'
        },
        {
          abbreviation: 'CT'
        },
        {
          abbreviation: 'DE'
        },
        {
          abbreviation: 'FL'
        },
        {
          abbreviation: 'GA'
        },
        {
          abbreviation: 'HI'
        },
        {
          abbreviation: 'ID'
        },
        {
          abbreviation: 'IL'
        },
        {
          abbreviation: 'IN'
        },
        {
          abbreviation: 'IA'
        },
        {
          abbreviation: 'KS'
        },
        {
          abbreviation: 'KY'
        },
        {
          abbreviation: 'LA'
        },
        {
          abbreviation: 'ME'
        },
        {
          abbreviation: 'MD'
        },
        {
          abbreviation: 'MA'
        },
        {
          abbreviation: 'MI'
        },
        {
          abbreviation: 'MN'
        },
        {
          abbreviation: 'MS'
        },
        {
          abbreviation: 'MO'
        },
        {
          abbreviation: 'MT'
        },
        {
          abbreviation: 'NE'
        },
        {
          abbreviation: 'NV'
        },
        {
          abbreviation: 'NH'
        },
        {
          abbreviation: 'NJ'
        },
        {
          abbreviation: 'NM'
        },
        {
          abbreviation: 'NY'
        },
        {
          abbreviation: 'NC'
        },
        {
          abbreviation: 'ND'
        },
        {
          abbreviation: 'OH'
        },
        {
          abbreviation: 'OK'
        },
        {
          abbreviation: 'OR'
        },
        {
          abbreviation: 'PA'
        },
        {
          abbreviation: 'RI'
        },
        {
          abbreviation: 'SC'
        },
        {
          abbreviation: 'SD'
        },
        {
          abbreviation: 'TN'
        },
        {
          abbreviation: 'TX'
        },
        {
          abbreviation: 'UT'
        },
        {
          abbreviation: 'VT'
        },
        {
          abbreviation: 'VA'
        },
        {
          abbreviation: 'WA'
        },
        {
          abbreviation: 'WV'
        },
        {
          abbreviation: 'WI'
        },
        {
          abbreviation: 'WY'
        },
        {
          abbreviation: 'Remote'
        },
        {
          abbreviation: 'Unknown'
        }
      ]);
    });
};
