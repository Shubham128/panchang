var config = require('../../config');
var commonFunction = require('../../common-function/helper');
var masterModel = require('../../models/admin/masterModel');
const fs 	= 	require('fs');
const moment = require('moment');

// List OF Block Data

exports.Blocklist = (req, res, next) => {
    session = req.session;

    console.log("session");
    console.log(session);
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
        const pageSize = 20;
        const currentPage = parseInt(req.query.page) || 1;
        const error = req.flash('error');
        const success = req.flash('success');

        var query = "SELECT * FROM block_list WHERE status='1' AND is_deleted='0' ORDER BY id DESC";
        
        var clf = "SELECT COUNT(c.block_id)as clf, b.block_name FROM clf_data as c LEFT JOIN block_list as b ON c.block_id = b.id GROUP BY c.block_id";
        config.query(clf, function (error, clfdata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var clflist = clfdata;   
                
            }
            paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {
            
                if (error) {
                    console.error(error.message);
                    return;
                }
                else {
                    paginatedItems = paginatedItems;
                 
                                
                }
            var error = req.flash('error');
            var success = req.flash('success');
            res.render('admin/master/list_of_blocks', { error, success, list: paginatedItems,clflist: clflist, currentPage,  totalPages: Math.ceil(totalPage / pageSize), pageSize, active: 'pooja_package_media_list' });            
       });
    }); 
};
exports.DraftPanchang = (req, res, next) => {
    session = req.session;

    console.log("session");
    console.log(session);
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
        const pageSize = 20;
        const currentPage = parseInt(req.query.page) || 1;
        const error = req.flash('error');
        const success = req.flash('success');

        var query = "SELECT * FROM block_list WHERE status='1' AND is_deleted='0' ORDER BY id DESC";
        
        var clf = "SELECT COUNT(c.block_id)as clf, b.block_name FROM clf_data as c LEFT JOIN block_list as b ON c.block_id = b.id GROUP BY c.block_id";
        config.query(clf, function (error, clfdata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var clflist = clfdata;   
                
            }
            paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {
            
                if (error) {
                    console.error(error.message);
                    return;
                }
                else {
                    paginatedItems = paginatedItems;
                 
                                
                }
            var error = req.flash('error');
            var success = req.flash('success');
            res.render('admin/master/list_of_Draft', { error, success, list: paginatedItems,clflist: clflist, currentPage,  totalPages: Math.ceil(totalPage / pageSize), pageSize, active: 'pooja_package_media_list' });            
       });
    }); 
};
exports.DraftPanchang = (req, res, next) => {
    session = req.session;

    console.log("session");
    console.log(session);
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
        const pageSize = 20;
        const currentPage = parseInt(req.query.page) || 1;
        const error = req.flash('error');
        const success = req.flash('success');

        var query = "SELECT * FROM block_list WHERE status='1' AND is_deleted='0' ORDER BY id DESC";
        
        var clf = "SELECT COUNT(c.block_id)as clf, b.block_name FROM clf_data as c LEFT JOIN block_list as b ON c.block_id = b.id GROUP BY c.block_id";
        config.query(clf, function (error, clfdata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var clflist = clfdata;   
                
            }
            paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {
            
                if (error) {
                    console.error(error.message);
                    return;
                }
                else {
                    paginatedItems = paginatedItems;
                 
                                
                }
            var error = req.flash('error');
            var success = req.flash('success');
            res.render('admin/master/list_of_panchnag', { error, success, list: paginatedItems,clflist: clflist, currentPage,  totalPages: Math.ceil(totalPage / pageSize), pageSize, active: 'pooja_package_media_list' });            
       });
    }); 
};

// Add Blocks Data

exports.AddBlocksSrv = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    if(req.method == 'POST'){
        console.log("POST");

        var formData = req.body;

        console.log(formData);


        var curr_date = "'" + currentdatetime() + "'";
        var cr_by = "'" + session.uid + "'";
        var state_name = "'" + formData.state_name + "'";
        var city_name = "'" + formData.city_name + "'";
        var block_name = "'" + formData.block_name + "'";
        var data = "INSERT INTO block_list(state_id,district_id,city_id,block_name,status,is_deleted)  VALUES (" + state_name + ',' + 0 + ','+ city_name + ',' + block_name + ',' + 1 +',' +0+ ")";
        
        console.log(data);

        config.query(data, function (error, save) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                req.flash('success', 'Block Data Saved Succesfully');
                res.redirect('/blocklist');
            }

        });  

    }
    else{

        const error = req.flash('error');
        const success = req.flash('success');

        res.render('admin/master/blocklist', { error, success});
    
    }
};

//  Edit Block Data

exports.EditBlockdata = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    const pageSize = 1;
    const currentPage = parseInt(req.query.page) || 1;
    const error = req.flash('error');
    const success = req.flash('success');
    var id =  req.query.id; 
    var query = "SELECT id,state_id,district_id,city_id,block_name,status,is_deleted FROM block_list WHERE id="+id;
    
        paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {
           
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                paginatedItems = paginatedItems;
                               
            }
        var error = req.flash('error');
        var success = req.flash('success');
        res.render('admin/master/edit_of_blocks', { error, success, list: paginatedItems, currentPage, totalPages: Math.ceil(totalPage / pageSize), pageSize, });
        
    });

};

// Update Block Data

exports.UpdateBlockData = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    
    if(req.method == 'POST'){
        var formData = req.body;

        var curr_date = "'" + currentdatetime() + "'";
        var cr_by = "'" + session.uid + "'";
        var state_name = "'" + formData.state_name + "'";
        var city_name = "'" + formData.city_name + "'";
        var block_name = "'" + formData.block_name + "'";
        var amount = "'" + formData.amount + "'";
        var result = formData.row_id;
        var rowid = result.trim();
        
       var data = "UPDATE block_list SET state_id="+ state_name +" ,city_id="+ city_name +" ,block_name="+ block_name +"  WHERE id="+rowid;
       console.log("data");
      console.log(data);
        config.query(data, function (error, save) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                req.flash('success', 'Block Data Update Succesfully');
                res.redirect('/blocklist');
            }

        });  

    }
    else{
        const error = req.flash('error');
        const success = req.flash('success');

        res.render('admin/master/edit_of_blocks', { error, success });
    }
};

// Delete Block Data

exports.DeleteBlockData = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }

        var id =  req.query.rowid; 
        var data ="UPDATE block_list SET is_deleted = '1' WHERE block_list.id="+id;
        
        config.query(data, function (error, servicedata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var servicename = servicedata;   
                if(servicename){
                    res.send(JSON.stringify(1));
                }else{
                    res.send(JSON.stringify(0));
                }
            }
            
        }); 
};

// Get Clf List Using Block Id

exports.Viewblockwiseclf = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    const pageSize = 5;
    const currentPage = parseInt(req.query.page) || 1;
    const error = req.flash('error');
    const success = req.flash('success');
    var id =  req.query.id; 

   var query = " SELECT c.id,c.district_id,c.block_id,c.created_by,c.name,c.address,c.dof,c.reg_number,c.pan_number,c.gstin_number,c.saving_account_number,c.bank_name,c.branch_name,c.ifsc_code,c.created_date,c.created_date,c.status,c.is_deleted,b.block_name FROM clf_data  c LEFT JOIN block_list AS b ON b.id = c.block_id WHERE c.is_deleted='0' AND c.block_id ="+id;
            paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {

                console.log("paginatedItems");
                console.log(paginatedItems);
                res.render('admin/master/list_of_clfs', { error, success, list: paginatedItems, currentPage, totalPages: Math.ceil(totalPage / pageSize), pageSize });
    });
          
};


// List Of Clf Data

exports.ClfListData = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    const pageSize = 6;
    const currentPage = parseInt(req.query.page) || 1;
    const error = req.flash('error');
    const success = req.flash('success');
    var service = masterModel.blockNameList();
    
    var query = " SELECT c.id,c.district_id,c.block_id,c.created_by,c.name,c.address,c.dof,c.reg_number,c.pan_number,c.gstin_number,c.saving_account_number,c.bank_name,c.branch_name,c.ifsc_code,c.created_date,c.created_date,c.status,c.is_deleted,b.block_name FROM clf_data  c LEFT JOIN block_list AS b ON b.id = c.block_id WHERE c.is_deleted='0' ORDER BY id DESC";
    config.query(service, function (error, servicedata) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            var servicename = servicedata;    
            
        }
       
        paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {
           
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                servicename = servicedata;
                               
            }
        var error = req.flash('error');
        var success = req.flash('success');
        res.render('admin/master/list_of_clfs', { error, success, list: paginatedItems, currentPage, servicelist : servicename, totalPages: Math.ceil(totalPage / pageSize), pageSize });
        
    });
});
};

// Add Clf Data 

exports.AddClfData = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }

    if(req.method == 'POST'){

        var formData = req.body;

        var curr_date = "'" + currentdatetime() + "'";
        var cr_by = "'" + session.uid + "'";
        var block_name = "'" + formData.block_name + "'";
        var clf_name = "'" + formData.clf_name + "'";
        var address = "'" + formData.address + "'";
        var datev  = "'" + formData.date_of_formation + "'";
       
        var date_of_formation         = Date.parse(datev);
        var reg_no = "'" + formData.reg_no + "'";
        var pan_no = "'" + formData.pan_no + "'";
        var gst_no = "'" + formData.gst_no + "'";
        var account_no = "'" + formData.account_no + "'";
        var bank_name = "'" + formData.bank_name + "'";
        var branch_name = "'" + formData.branch_name + "'";
        var ifsc = "'" + formData.ifsc + "'";
        var data ="INSERT INTO clf_data(block_id, name, address, dof, reg_number, pan_number, gstin_number, saving_account_number, bank_name, branch_name, ifsc_code,created_by,is_deleted,district_id) VALUES (" + block_name + ',' + clf_name + ',' + address + ',' + date_of_formation + ',' + reg_no +',' + pan_no+',' + gst_no+',' + account_no+',' + bank_name+',' + branch_name+',' + ifsc+',' + cr_by+',' +0+',' + 1+ ")";

            config.query(data, function (error, save) {
                if (error) {
                    console.error(error.message);
                    return;
                }
                else {
                    req.flash('success', 'CLF Data Saved Succesfully');
                    res.redirect('/clfListData');
                }

            });  
         

    }
    else{
        var service = masterModel.blockNameList();
        config.query(service, function (error, servicedata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                servicename = servicedata;
                const error = req.flash('error');
                const success = req.flash('success');
                res.render('admin/master/add_clf_data', { error, success, servicelist : servicename});
            }
            
        });
           
    }
};

// Change Clf Data Status  

exports.ChangeClfDataStatus = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    var id =  req.query.rowid; 
    var status =  req.query.status; 
    var data = "UPDATE clf_data SET status = "+status+" WHERE clf_data.id ="+id;
   
    config.query(data, function (error, servicedata) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            var servicename = servicedata;   
            if(servicename){
                res.send(JSON.stringify(1));
            }else{
                res.send(JSON.stringify(0));
            }
        }
        
    }); 
};

// Get  All Clf List By Block Id 

exports.GetClfListByBlockId = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    var block_id =  req.query.block_id; 

    var data = "SELECT * FROM nm_clf_detail WHERE block_name="+block_id;

    console.log("data");
    console.log(data);

    config.query(data, function (error, servicedata) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            var servicename = servicedata;   
            console.log("servicename");
            console.log(servicename);
          
            if(servicename){
                res.send(JSON.stringify(servicename))
            }else{
                res.send(JSON.stringify(0))
            }
        }
        
    }); 
};

//  Edit Clf Data

exports.EditClfdata = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    var id =  req.query.id; 

    if(req.body.length > 0){
        console.log(req.body);
    }
    else{

        var data = "SELECT id, district_id, block_id, created_by, name, address, dof, pan_number, gstin_number, saving_account_number, bank_name, branch_name, ifsc_code, reg_number, status, created_date, is_deleted FROM clf_data WHERE id="+id;

        var service = masterModel.blockNameList();
      
        config.query(data, function (error, servicedata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var servicename = servicedata; 
                //console.log("zxcv");
                console.log(servicename);   
            }

            config.query(service, function (error, clfdata) {
                if (error) {
                    console.error(error.message);
                    return;
                }
                else {
                   var  clfdata = clfdata;
    
                    
                }
            var error = req.flash('error');
            var success = req.flash('success');
            res.render('admin/master/edit_of_clf', { error, success, list: servicename, servicelist: clfdata, active:'pooja_darshan_list'});
            
        });
    });
}
    
};

//  Update Clf Data

exports.UpdateClfData = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }

    console.log("sdfsd");
    console.log(req.method);
    

    if(req.method == 'POST'){
        var formData = req.body;

        var curr_date = "'" + currentdatetime() + "'";
        var cr_by = "'" + session.uid + "'";
        var block_name = "'" + formData.block_name + "'";
        var clf_name = "'" + formData.clf_name + "'";
        var address = "'" + formData.address + "'";
        var datev  = "'" + formData.date_of_formation + "'";
        var date_of_formation         = Date.parse(datev);
        var reg_no = "'" + formData.reg_no + "'";
        var pan_no = "'" + formData.pan_no + "'";
        var gst_no = "'" + formData.gst_no + "'";
        var account_no = "'" + formData.account_no + "'";
        var bank_name = "'" + formData.bank_name + "'";
        var branch_name = "'" + formData.branch_name + "'";
        var ifsc = "'" + formData.ifsc + "'";
        var result = formData.row_id;
        var rowid = result.trim();
        
      var data = "UPDATE clf_data SET district_id= "+ 1 +" ,block_id= "+ block_name +" ,name= "+ clf_name +" ,address= "+ address +" ,dof= "+ date_of_formation +" ,pan_number= "+ pan_no +" ,gstin_number= "+ gst_no +" ,saving_account_number="+ account_no +" ,bank_name="+ bank_name +" ,branch_name="+ branch_name +" ,ifsc_code="+ ifsc +" ,reg_number="+ reg_no +" WHERE id="+rowid;

        config.query(data, function (error, save) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                req.flash('success', 'CLF Data Update Succesfully');
                res.redirect('/clfListData');
            }

        });  

    }
    else{
        const error = req.flash('error');
        const success = req.flash('success');

        res.render('admin/master/edit_of_clf', { error, success });
    }
};

// Delete Clf

exports.DeleteClfData = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }

        var id =  req.query.rowid; 
        var data ="UPDATE clf_data SET is_deleted = '1' WHERE clf_data.id="+id;
        
        config.query(data, function (error, servicedata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var servicename = servicedata;   
                if(servicename){
                    res.send(JSON.stringify(1));
                }else{
                    res.send(JSON.stringify(0));
                }
            }
            
        }); 
};


exports.CaderListData = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    const pageSize = 7;
    const currentPage = parseInt(req.query.page) || 1;
    const error = req.flash('error');
    const success = req.flash('success');

    var query = "SELECT id, cader_id, cader_details, status FROM cader_info WHERE  status ='1'";
       
        paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {
        
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                servicename = paginatedItems;
                            
            }
        var error = req.flash('error');
        var success = req.flash('success');
        res.render('admin/master/list_of_cader', { error, success, list: paginatedItems, currentPage, totalPages: Math.ceil(totalPage / pageSize), pageSize });
    
});
};
/**************************** * VO CURD opration START here*************************************/
exports.voList = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    const pageSize = 6;
    const currentPage = parseInt(req.query.page) || 1;
    const error = req.flash('error');
    const success = req.flash('success');
    var service = masterModel.blockNameList();
    
    
    var query = "SELECT vo.*,b.block_name,c.name as clfname  FROM vo_data vo LEFT JOIN block_list AS b ON b.id = vo.block_id  LEFT JOIN clf_data c  ON c.id = vo.clf_id WHERE vo.is_deleted ='0'";
    config.query(service, function (error, servicedata) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            var servicename = servicedata;    
            
        }

       
        paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {
        
            if (error) {
                console.error(error.message);
                return;
            }
            else 
            {
                servicename = servicedata;
            }
        var error = req.flash('error');
        var success = req.flash('success');
        res.render('admin/master/list_of_vo', { error, success, list: paginatedItems, currentPage, servicelist : servicename, totalPages: Math.ceil(totalPage / pageSize), pageSize });
        
    });
});
};

    exports.addNewVO = (req, res, next) => {
        session = req.session;
        //Checking Session 
        if (!session.uid) {
            res.redirect("/login");
        }
        
        var blockqry= masterModel.blockNameList();
        var clfqry = "select * from clf_data where status=1 AND is_deleted=0";
        let clfdataArr = [];
         config.query(clfqry, function (error, clfdata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                 clfdataArr = clfdata;    
                
            }});
        config.query(blockqry, function (error, blockdata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var blockdataArr = blockdata;    
                
            }
            var error = req.flash('error');
            var success = req.flash('success');
            console.log(clfdataArr);
            res.render('admin/master/add_vo', { error, success, allblockdata : blockdataArr,clfdatas:clfdataArr });
    });
   
    
    };

exports.AddVoData = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    
    if(req.method == 'POST')
    {
        var formData = req.body;
        var district_id   = 1;
        var block_id    = formData.block_id;
        var clf_id      = formData.clf_id;
        var created_by  = session.uid;
        var name        = formData.vo_name;
        var address     = formData.address;
        var datev       = formData.date_of_formation;
        var dof         = Date.parse(datev);
        var pan_number  = formData.pan_number;
        var reg_number  = formData.reg_number;
        var gstin_number= formData.gstin_number;
        var saving_account_number  = formData.saving_account_number;
        var bank_name   = formData.bank_name;
        var branch_name = formData.branch_name;
        var ifsc_code   = formData.ifsc_code;

        var sanquery = "INSERT INTO vo_data ( clf_id,district_id,block_id,created_by,name,address,dof,pan_number,gstin_number,saving_account_number,bank_name,branch_name,ifsc_code,reg_number ) VALUES ?";
        var sanArr = [
            [clf_id,district_id,block_id,created_by,name,address,dof,pan_number,gstin_number,saving_account_number,bank_name,branch_name,ifsc_code,reg_number]
          ];
        
          config.query(sanquery,[sanArr],function(error,result){
            console.log(result);
            if (error) 
            {
                req.flash('error', 'Some thing went wrong,please try again latter.');
                res.redirect("/volist");
            }
            else 
            {
               req.flash('success', 'vo data has been created successfully.');
               res.redirect("/volist");
            } 
          });  

    }
    else
    {
        const error = req.flash('error');
        const success = req.flash('success');

        res.render('admin/master/voList', { error, success});
    
    }
};


exports.editVo = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }

    let blockqry = masterModel.blockNameList();

    let clfqry = "select * from clf_data where status=1 AND is_deleted=0";
  
    let clfdataArr = [];
    let blockdataArr = [];
    config.query(blockqry, function (error, blockdata) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            
             blockdataArr = blockdata;    
        }});
    
    config.query(clfqry, function (error, clfdata) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            
             clfdataArr = clfdata;
            
        }});
       
        const id = req.params.id;
        var sqlqry = "select id, district_id, block_id, created_by, name, address, dof, pan_number, gstin_number, saving_account_number, bank_name, branch_name, ifsc_code, reg_number, status, created_date, is_deleted from vo_data where id="+id;
        config.query(sqlqry, function (error, vodata) {
        if (error) {
            return;
        }
        else {
            var vodatadataArr = vodata;  
            console.log("sdfhj");  
            console.log(vodatadataArr);
        }
        var error = req.flash('error');
        var success = req.flash('success');
      
        res.render('admin/master/edit_vo', { error, success,vorowdata : vodatadataArr, allblockdata : blockdataArr,clfdatas:clfdataArr });
});
};

exports.editVoData = (req, res, next) => {
session = req.session;
//Checking Session 
if (!session.uid) {
    res.redirect("/login");
}

if(req.method == 'POST')
{
    var formData = req.body;
    console.log(formData);
    
    var district_id   = 1;
    var block_id  = formData.block_id;
    var clf_id    = formData.clf_id;
    var created_by  = session.uid;
    var name        = formData.vo_name;
    var address     = formData.address;
    var datev       = formData.date_of_formation
    var dof         = Date.parse(datev);
    var pan_number  = formData.pan_number;
    var reg_number  = formData.reg_number;
    var gstin_number  = formData.gstin_number;
    var saving_account_number  = formData.saving_account_number;
    var bank_name     = formData.bank_name;
    var branch_name   = formData.branch_name;
    var ifsc_code     = formData.ifsc_code;
    var id            = formData.id;

    var sanquery = "UPDATE vo_data set clf_id=?,district_id=?,block_id=?,created_by=?,name=?,address=?,dof=?,pan_number=?,gstin_number=?,saving_account_number=?,bank_name=?,branch_name=?,ifsc_code=?,reg_number=? where id=?";

      config.query(sanquery,[clf_id,district_id,block_id,created_by,name,address,dof,pan_number,gstin_number,saving_account_number,bank_name,branch_name,ifsc_code,reg_number,id],function(error,result){
        console.log(result);
        if (error) 
        {
            req.flash('error', 'Some thing went wrong,please try again latter.');
            res.redirect("/volist");
        }
        else 
        {
           req.flash('success', 'vo data has been updated successfully.');
           res.redirect("/volist");
        } 
      });  

}
else
{
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('admin/master/voList', { error, success});

}
};

exports.changestatusvo = (req, res, next) => {
    var san='';
    var newstatus='';
    var id =  req.query.rowid; 
    var status =  req.query.status; 
    if(status == 1)
    {
        newstatus =0;
    }
    else
    {
        newstatus =1;
    }
    var sanqry = "UPDATE vo_data SET status=? WHERE id=?";
    config.query(sanqry,[newstatus,id], function (error, result) {
        if (error) 
        {
            san='1';
        }
        else
        {
            san='2';
        }

        res.send(san);
        
    }); 
};
/**************************** * VO CURD opration end here*************************************/

/**************************** * SHG CURD opration START HERE*************************************/
exports.shgList = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    const pageSize = 6;
    const currentPage = parseInt(req.query.page) || 1;
    
    
    var query = "SELECT shg.*,v.name as voname FROM shg_data as shg LEFT JOIN vo_data AS v ON v.id = shg.vo_id WHERE shg.is_deleted =0";
    
    config.query(query, function (error, shgdata) {
        if (error) {
            console.error(error.message);
            return;
        }
        var error = req.flash('error');
        var success = req.flash('success');
        res.render('admin/master/list_of_shg', { error, success, list: shgdata });
     });
};

    exports.addNewSHG = (req, res, next) => {
        session = req.session;
        //Checking Session 
        if (!session.uid) {
            res.redirect("/login");
        }
        
        var voqry = "select * from vo_data where status=1 AND is_deleted=0";
        
         config.query(voqry, function (error, voDataResult) {
            if (error) {
                console.error(error.message);
                return;
            }
            var error = req.flash('error');
            var success = req.flash('success');
            res.render('admin/master/add_shg', { error, success, vodata : voDataResult });
          });
    
    };

exports.AddSHGData = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    
    if(req.method == 'POST')
    {
        var formData = req.body;
        console.log(formData);
        
       
        var vo_id    = formData.vo_id;
        var created_by  = session.uid;
        var name        = formData.shg_name;
        var address     = formData.address;
        var datev       = formData.date_of_formation
        var dof         = Date.parse(datev);
        var pan_number  = formData.pan_number;
        var reg_number  = formData.reg_number;
        var gstin_number  = formData.gstin_number;
        var saving_account_number  = formData.saving_account_number;
        var bank_name  = formData.bank_name;
        var branch_name  = formData.branch_name;
        var ifsc_code  = formData.ifsc_code;

        var sanquery = "INSERT INTO shg_data ( vo_id,created_by,name,address,dof,pan_number,gstin_number,saving_account_number,bank_name,branch_name,ifsc_code,reg_number ) VALUES ?";
        var sanArr = [
            [vo_id,created_by,name,address,dof,pan_number,gstin_number,saving_account_number,bank_name,branch_name,ifsc_code,reg_number]
          ];
        
          config.query(sanquery,[sanArr],function(error,result){
            console.log(result);
            if (error) 
            {
                req.flash('error', 'Some thing went wrong,please try again latter.');
                res.redirect("/shglist");
            }
            else 
            {
               req.flash('success', 'shg data has been created successfully.');
               res.redirect("/shglist");
            } 
          });  

    }
    
};

exports.editSHG = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    
    var voqry = "select * from vo_data where status=1 AND is_deleted=0";
    var voDataResult  = [];
    config.query(voqry, function (error, voDataResult) {
        if (error) {
            console.error(error.message);
            return;
        }
      });

      const id = req.params.id;
      var sqlqry = "select * from shg_data where id="+id;
      config.query(sqlqry, function (error, shgdata) {
        if (error) {
            console.error(error.message);
            return;
        }
        var error = req.flash('error');
        var success = req.flash('success');
        res.render('admin/master/edit_shg', { error, success, shgrowdata : shgdata, vodata : voDataResult });
      });
};


exports.editSHGData = (req, res, next) => {
session = req.session;
//Checking Session 
if (!session.uid) {
    res.redirect("/login");
}

    if(req.method == 'POST')
    {
        var formData = req.body;

        var vo_id       = formData.vo_id;
        var created_by  = session.uid;
        var name        = formData.shg_name;
        var address     = formData.address;
        var datev       = formData.date_of_formation
        var dof         =  Date.parse(datev);
        var pan_number  = formData.pan_number;
        var reg_number  = formData.reg_number;
        var gstin_number  = formData.gstin_number;
        var saving_account_number  = formData.saving_account_number;
        var bank_name     = formData.bank_name;
        var branch_name   = formData.branch_name;
        var ifsc_code     = formData.ifsc_code;
        var id            = formData.id;

        var sanquery = "UPDATE shg_data set vo_id=?,created_by=?,name=?,address=?,dof=?,pan_number=?,gstin_number=?,saving_account_number=?,bank_name=?,branch_name=?,ifsc_code=?,reg_number=? where id=?";

        config.query(sanquery,[vo_id,created_by,name,address,dof,pan_number,gstin_number,saving_account_number,bank_name,branch_name,ifsc_code,reg_number,id],function(error,result){
            console.log(result);
            if (error) 
            {
                req.flash('error', 'Some thing went wrong,please try again latter.');
                res.redirect("/shglist");
            }
            else 
            {
               req.flash('success', 'shg data has been updated successfully.');
               res.redirect("/shglist");
            } 
        });  

   }
};


exports.changestatusshg = (req, res, next) => {
    var san='';
    var newstatus='';
    var id =  req.query.rowid; 
    var status =  req.query.status; 
    if(status == 1)
    {
        newstatus =0;
    }
    else
    {
        newstatus =1;
    }
    var sanqry = "UPDATE shg_data SET status=? WHERE id=?";
    config.query(sanqry,[newstatus,id], function (error, result) {
        if (error) 
        {
            san='1';
        }
        else
        {
            san='2';
        }

        res.send(san);
        
    }); 
};
/**************************** * SHG CURD opration END HERE*************************************/

/* loan type master*/

exports.loanTypeView = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }

    const error = req.flash('error');
    const success = req.flash('success');

    var category = "SELECT *FROM  loan_type_master  WHERE is_deleted=0";
    config.query(category, function (error, categoryList) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            category = categoryList;
            const error = req.flash('error');
            const success = req.flash('success');
            res.render('admin/master/list_of_loan_type', { error, success, list: category });
        } 
       
    });
};

exports.addLoantype = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    if(req.method == 'POST'){
        console.log("POST");

        var formData = req.body;

        console.log(formData);    
        var status= "'" + formData.status + "'";
        var loan_name = "'" + formData.loan_name + "'";
        var data = "INSERT INTO loan_type_master(status,loan_name,is_deleted)  VALUES (" + status + ',' + loan_name + ',' +0+ ")";
        
        console.log(data);

        config.query(data, function (error, save) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                req.flash('success', 'Block Data Saved Succesfully');
                res.redirect('/loantype');
            }

        });  

    }
    else{
        const error = req.flash('error');
        const success = req.flash('success');

        res.render('admin/master/list_of_loan_type', { error, success});
    
    }
};
exports.deleteloanType = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }

        var id =  req.query.rowid; 
        console.log(id);
        var data ="UPDATE loan_type_master SET is_deleted = '1' WHERE loan_type_master.id="+id;
        
        config.query(data, function (error, servicedata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var servicename = servicedata;   
                if(servicename){
                    res.send(JSON.stringify(1));
                }else{
                    res.send(JSON.stringify(0));
                }
            }
            
        }); 
};



/* distrct master*/

exports.districtData = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }

    const error = req.flash('error');
    const success = req.flash('success');

    var district = "SELECT *FROM  district_master  WHERE is_deleted=0";
    config.query(district, function (error, districtList) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            category = districtList;
            const error = req.flash('error');
            const success = req.flash('success');
            res.render('admin/master/list_of_district', { error, success, list: category });
        } 
       
    });
};

exports.AddofDistrict = (req, res, next) => {
    session	=	req.session;
    var category = "SELECT * FROM district_master WHERE is_deleted=0";
    config.query(category, function (error, categoryList) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            category = categoryList;
            const error = req.flash('error');
            const success = req.flash('success');
            res.render('admin/master/add_district_data', { error, success, list: category });
        } 
       
    });
};

exports.PosofDistrict = (req, res, next) => {
    
   var disrict_name = "'"+req.body.district_name+"'";
   var status = "'"+req.body.status+"'";
   var insert = "INSERT INTO district_master(district_name , status) VALUES ("+disrict_name+','+status+")";
   config.query(insert, function (error, isinsert) {
       if (error) {
           console.error(error.message);
           return;
       }
       else {
           req.flash('success', 'Successfully inserted ');
           res.redirect('/districtList');
       } 
   });
};


exports.editDistrict = (req, res, next) => {
    session	=	req.session;
    //Checking Session 
    
        if (!session.uid) {
            res.redirect("/login");
        }
    
    
    const id = "'"+req.params.id+"'";
  
    const counter="SELECT * FROM district_master WHERE id ="+id;
    config.query(counter, function (error, counterdata) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            countername = counterdata;
            const error = req.flash('error');
            const success = req.flash('success');
            res.render('admin/master/edit_of_district', { error, success,counterlist: countername });
        }
        
      
       
    });
};


 exports.updateDistrict = (req, res, next) => {
    

    const id = "'"+req.params.id+"'";
    var disrict_name = "'"+req.body.district_name+"'";
    var status = "'"+req.body.status+"'";
   
     var insert = "UPDATE district_master SET disrict_name="+disrict_name+", status= "+status+"  WHERE ID  = "+id;

 
    config.query(insert, function (error, isinsert) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            req.flash('success', 'Successfully edited ');
            res.redirect('/districtList');
           
        } 
    });
  
};
exports.changestatusDis = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }
    var id =  req.query.rowid; 
    var status =  req.query.status; 
    var data = "UPDATE district_master SET status = "+status+" WHERE district_master.id ="+id;
   
    config.query(data, function (error, servicedata) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            var servicename = servicedata;   
            if(servicename){
                res.send(JSON.stringify(1));
            }else{
                res.send(JSON.stringify(0));
            }
        }
        
    }); 
};

exports.deleteDistrict = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.uid) {
        res.redirect("/login");
    }

        var id =  req.query.rowid; 
        console.log(id);
        var data ="UPDATE district_master SET is_deleted = '1' WHERE district_master.id="+id;
        
        config.query(data, function (error, servicedata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var servicename = servicedata;   
                if(servicename){
                    res.send(JSON.stringify(1));
                }else{
                    res.send(JSON.stringify(0));
                }
            }
            
        }); 
};

