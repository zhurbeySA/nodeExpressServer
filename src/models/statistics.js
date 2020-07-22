import moment from 'moment';
import db from './controllers/statisticsDB';

const statisticsList = ['session_number', 'ordered', 'delivered', 'deals', 'product_sold', 'product_in_each_order',
  'avg_receipt', 'orders_income', 'product_income', 'cost_price', 'extra_price', 'rol', 'mark', 'income',
  'spend', 'converse_order', 'converse_sells'];

// Period boundaries validation
const periodValidation = (dateFrom, dateTo) => {
  if (!dateFrom || !dateTo) {
    throw new Error('Period is not defined. Send arguments "dateFrom" and "dateTo"');
  }

  // Check that strings can be converted to valid dates
  // eslint-disable-next-line
  if (isNaN(Date.parse(dateFrom)) || isNaN(Date.parse(dateTo))) {
    throw new Error('Invalid boundaries of time period');
  }
};

const getStatisticsByPeriod = async (statField, periodScale, dateFrom, dateTo) => {
  // Statistic name validation
  if (!statisticsList.includes(statField)) {
    throw new Error('No such parametr in database');
  }

  // Validation of time period parametrs
  switch (periodScale) {
    case 'day':
      periodValidation(dateFrom, dateTo);
      break;
    case 'month':
      periodValidation(dateFrom, dateTo);
      break;
    case 'year':
      if (dateFrom.length !== 4 || !Number(dateFrom)
        || dateTo.length !== 4 || !Number(dateTo)) {
        throw new Error('Invalid boundaries of time period');
      }
      break;
    default:
  }

  let query = '';
  const dateFormat = 'YYYY-MM-DD HH';

  // Formate query to database
  if (periodScale === 'day') {
    const from = moment(new Date(dateFrom)).startOf('day').format(dateFormat);
    const to = moment(new Date(dateTo)).endOf('day').format(dateFormat);

    query = `SELECT ${statField}, day FROM day_stat WHERE day BETWEEN '${from}' AND '${to}'`;
  } else if (periodScale === 'month') {
    const from = moment(new Date(dateFrom)).startOf('month').format(dateFormat);
    const to = moment(new Date(dateTo)).endOf('month').format(dateFormat);

    query = `SELECT ${statField}, month_year FROM month_stat WHERE month_year BETWEEN '${from}' AND '${to}'`;
  } else {
    query = `SELECT ${statField}, year FROM year_stat WHERE year BETWEEN ${dateFrom} AND ${dateTo}`;
  }

  console.log(query);
  const data = await db.any(query);
  return data;
};

const getDataExample = async () => {
  const query = 'SELECT * FROM calls LIMIT 10';

  const data = await db.any(query);
  return data;
};

export { getStatisticsByPeriod, getDataExample };
