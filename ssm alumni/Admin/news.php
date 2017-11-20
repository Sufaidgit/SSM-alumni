<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Admin Home</title>
<!-- bootstrap v3.3.7 css -->
        <link rel="stylesheet" href="../css/bootstrap.min.css">
		<!-- responsive css -->
        <link rel="stylesheet" href="../css/responsive.css">
        <!--close    ,, bootstrap v3.3.7 css -->
</head>

<body style="padding-top: 50px;">
<div class="container">
<div class="row">
 <div class="col-sm-4">
  <ul class="nav nav-pills nav-stacked">
    <li><a href="#">Home</a></li>
    <li class="active"><a href="news.php">News Updation</a></li>
    <li><a href="#">Menu 2</a></li>
    <li><a href="#">Menu 3</a></li>
  </ul>
  </div>
  <div class="col-sm-8">
  <div class="page-header"><h3>Update News</h3></div>
  <form>
  <div class="form-group">
    <label for="email">Select priority:</label>
    <select name="" class="form-control" required>
     <option value="">Select priority</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>
  <div class="form-group">
    <label for="email">News Title:</label>
    <input type="text" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="pwd">Description:</label>
    <textarea class="form-control" required></textarea>
  </div>
  <div class="form-group">
    <label for="pwd" >Date:</label>
     <input type="date" class="form-control" required>
  </div>
  <button type="submit" class="btn btn-default">Update</button>
   <button type="reset" class="btn btn-default">Clear</button>
</form>
<HR style="border-top: 1px solid #00F;">

   <table class="table">
    <thead>
      <tr>
        <th>Priority</th>
        <th>News Title</th>
        <th>Descriptions</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>

</div>
</div>
</div>
</body>
</html>