import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface IProps {
  title: string | null;
  children: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

const Section: React.FC<IProps> = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Card
      classes={{
        root: classes.root,
      }}
    >
      <CardContent>
        {title && (
          <Box my={1}>
            <Typography variant="h5">{title}</Typography>
          </Box>
        )}
        {children}
      </CardContent>
    </Card>
  );
};

export default Section;
